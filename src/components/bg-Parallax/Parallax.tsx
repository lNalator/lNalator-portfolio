import classes from "../../styles/Parallax.module.css";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import { AnimateValues, SCROLL_TRAVEL } from "./settings/AnimateValues";

const blocks = [classes.circle, classes.band, classes.rect];

// Smooth tween between page poses; each block lags a little more than the one before for depth.
const tween = (i: number) => ({
  type: "tween" as const,
  duration: 1.1,
  delay: i * 0.08,
  ease: [0.65, 0, 0.35, 1] as [number, number, number, number],
});

function Layer({ travel, children }: { travel: string; children: React.ReactNode }) {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", reduce ? "0vh" : travel]);
  return (
    <motion.div className={classes.layer} style={{ y }}>
      {children}
    </motion.div>
  );
}

export default function Parallax({ isMobile }: { isMobile?: boolean }) {
  const pathName = usePathname();
  const poses = AnimateValues[isMobile ? "mobile" : "desktop"];
  const pose = poses[pathName as keyof typeof poses] ?? poses["/"];

  return (
    <div className={classes.container}>
      {blocks.map((cls, i) => (
        <Layer key={i} travel={SCROLL_TRAVEL[i]}>
          <motion.div
            className={cls}
            initial={false}
            animate={pose[i]}
            transition={tween(i)}
          />
        </Layer>
      ))}
    </div>
  );
}
