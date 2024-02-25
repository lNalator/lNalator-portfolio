import Elipse from "./components/Elipse";
import classes from "../../styles/Parallax.module.css";
import Line from "./components/Line";
import Rect from "./components/Rect";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function Parallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  return (
    <div className={classes.container}>
      <Elipse class={classes.elementElipse} />
      <Line class={classes.elementLine} />
      <Rect class={classes.elementRect} />
    </div>
  );
}
