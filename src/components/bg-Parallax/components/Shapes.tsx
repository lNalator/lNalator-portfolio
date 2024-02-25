import { MotionConfig, motion } from "framer-motion";
import Elipse from "./Elipse";
import Line from "./Line";
import Rect from "./Rect";
import { useRef, useLayoutEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { useSmoothTransform } from "../settings/useSmoothTransform";
import { transition } from "../settings/transition";


export default function Shapes(props: any) {
  return (
    <Canvas shadows dpr={[1, 2]} resize={{ scroll: false, offsetSize: true }}>
      {/* <Camera mouseX={props.mouseX} mouseY={props.mouseY} /> */}
      <MotionConfig transition={transition}>
        <Elipse
          class={props.class}
          isHover={props.isHover}
          mouseX={props.mouseX}
          mouseY={props.mouseY}
        />
        <Line
          class={props.class}
          isHover={props.isHover}
          mouseX={props.mouseX}
          mouseY={props.mouseY}
        />
        <Rect
          class={props.class}
          isHover={props.isHover}
          mouseX={props.mouseX}
          mouseY={props.mouseY}
        />
      </MotionConfig>
    </Canvas>
  );
}

const spring = { stiffness: 600, damping: 30 };
