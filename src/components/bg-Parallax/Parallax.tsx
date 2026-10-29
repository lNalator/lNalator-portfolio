import classes from "../../styles/Parallax.module.css";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import { AnimateValues, SCROLL_TRAVEL } from "./settings/AnimateValues";

const blocks = [classes.circle, classes.band, classes.rect];

// Smooth tween between page poses; each block lags a little more than the one before for depth.
const tween = (i: number) => ({
  type: "tween" as const,
  duration: 1.1,
  delay: i * 0.08,
  ease: [0.65, 0, 0.35, 1] as [number, number, number, number],
});

type Pose = { x: string; y: string; rotate: number };

// Route a block through the corner of its move that is farthest from the screen centre,
// so it slides along the screen edges instead of cutting across the middle.
const viaEdge = (from: Pose, to: Pose) => {
  const [fx, fy, tx, ty] = [from.x, from.y, to.x, to.y].map(parseFloat);
  const off = (x: number, y: number) => Math.abs(x - 50) + Math.abs(y - 50);
  let [wx, wy] = off(tx, fy) >= off(fx, ty) ? [to.x, from.y] : [from.x, to.y];
  // both corners are near the middle (similar heights/widths): arc over the nearest top/bottom edge instead
  if (off(parseFloat(wx), parseFloat(wy)) < 80) {
    wx = `${(fx + tx) / 2}vw`;
    wy = (fy + ty) / 2 < 50 ? "-30vh" : "110vh";
  }
  return { x: [null, wx, to.x] as [null, string, string], y: [null, wy, to.y] as [null, string, string], rotate: to.rotate };
};

function Layer({ travel, children }: { travel: string; children: React.ReactNode }) {
  const { scrollY } = useScroll();
  // not scrollYProgress: on a page that cannot scroll it reads 1 after a reload but keeps the old value on navigation
  const scrollYProgress = useTransform(scrollY, (v) => {
    if (typeof document === "undefined") return 0; // SSR
    const max = document.documentElement.scrollHeight - window.innerHeight;
    return max > 0 ? Math.min(1, v / max) : 0;
  });
  const reduce = useReducedMotion();
  // spring: a route change resets scroll to 0 in one frame, which would make the layers snap
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 26, mass: 0.6 });
  const y = useTransform(progress, [0, 1], ["0vh", reduce ? "0vh" : travel]);
  return (
    <motion.div className={classes.layer} style={{ y }}>
      {children}
    </motion.div>
  );
}

export default function Parallax({ isMobile }: { isMobile?: boolean }) {
  const pathName = usePathname();
  const poses = AnimateValues[isMobile ? "mobile" : "desktop"];
  const poseOf = (path: string | null) => poses[path as keyof typeof poses] ?? poses["/"];
  const pose = poseOf(pathName);

  // previous route is committed in an effect so strict-mode double renders still see it
  const prevPath = useRef(pathName);
  const from = prevPath.current !== pathName ? poseOf(prevPath.current) : null;
  useEffect(() => {
    prevPath.current = pathName;
  }, [pathName]);

  return (
    <div className={classes.container}>
      {blocks.map((cls, i) => (
        <Layer key={i} travel={SCROLL_TRAVEL[i]}>
          <motion.div
            className={cls}
            initial={false}
            animate={from ? viaEdge(from[i], pose[i]) : pose[i]}
            transition={tween(i)}
          />
        </Layer>
      ))}
    </div>
  );
}
