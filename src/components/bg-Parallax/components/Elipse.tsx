import { motion } from "framer-motion";

export default function Elipse(props: any) {
  return (
    <motion.svg
      width="411"
      height="410"
      viewBox="0 0 411 410"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.class}
    >
      <g filter="url(#filter0_bdf_67_22)">
        <ellipse
          cx="205.5"
          cy="202"
          rx="201.5"
          ry="200"
          fill="#5800C9"
          fillOpacity="0.55"
          shapeRendering="crispEdges"
        />
      </g>
    </motion.svg>
  );
}
