import { motion } from "framer-motion";

export default function Rect(props: any) {
  return (
    <motion.svg
      width="498"
      height="485"
      viewBox="0 0 498 485"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.class}
      animate={props.animate}
      transition={props.transition}
    >
      <g filter="url(#filter0_bdf_67_23)">
        <rect
          x="-6"
          y="239.579"
          width="403.832"
          height="311.485"
          rx="25"
          transform="rotate(-37.4538 -6 239.579)"
          fill="#1A00BB"
          fillOpacity="0.6"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_bdf_67_23"
          x="0.0478516"
          y="0.0478516"
          width="497.904"
          height="484.753"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_67_23"
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
            in2="effect1_backgroundBlur_67_23"
            result="effect2_dropShadow_67_23"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_67_23"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="2"
            result="effect3_foregroundBlur_67_23"
          />
        </filter>
      </defs>
    </motion.svg>
  );
}
