import Elipse from "./components/Elipse";
import classes from "../../styles/Parallax.module.css";
import Line from "./components/Line";
import Rect from "./components/Rect";
import { useTransform, MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { transition } from "./settings/transition";
import { AnimateValues } from "./settings/AnimateValues";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Parallax() {
  const [animate, setAnimate] = useState([
    { x: 0, y: 0, rotate: 0 },
    { x: 0, y: 0, rotate: 0 },
    { x: 0, y: 0, rotate: 0 },
  ]);

  const ref = useRef(null);
  const pathName = usePathname();

  useEffect(() => {
    if (pathName === "/about") {
      setAnimate(AnimateValues[0]);
    } else if (pathName === "/projects") {
      setAnimate(AnimateValues[1]);
    } else {
      setAnimate(AnimateValues[2]);
    }
  }, [pathName]);

  return (
    <div className={classes.container}>
      <Elipse
        class={classes.elementElipse}
        transition={transition}
        animate={animate[0]}
      />
      <Line
        class={classes.elementLine}
        transition={transition}
        animate={animate[1]}
      />
      <Rect
        class={classes.elementRect}
        transition={transition}
        animate={animate[2]}
      />
    </div>
  );
}
