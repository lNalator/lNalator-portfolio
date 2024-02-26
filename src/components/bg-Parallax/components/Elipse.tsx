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
      animate={props.animate}
      transition={props.transition}
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
      <defs>
        <filter
          id="filter0_bdf_67_22"
          x="0"
          y="-2"
          width="411"
          height="412"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_67_22"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_backgroundBlur_67_22"
            result="effect2_dropShadow_67_22"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_67_22"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1"
            result="effect3_foregroundBlur_67_22"
          />
        </filter>
      </defs>
    </motion.svg>
  );
}
