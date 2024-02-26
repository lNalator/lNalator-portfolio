import { motion } from "framer-motion";

export default function Line(props: any) {
  return (
    <motion.svg
      width="2010"
      height="669"
      viewBox="0 0 2010 669"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.class}
      animate={props.animate}
      transition={props.transition}
    >
      <g filter="url(#filter0_bdf_67_24)">
        <rect
          x="4"
          y="439.381"
          width="2000"
          height="226.905"
          transform="rotate(-12.578 4 439.381)"
          fill="#C300C7"
          fillOpacity="0.65"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_bdf_67_24"
          x="0"
          y="-0.155762"
          width="2009.41"
          height="668.996"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_67_24"
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
            in2="effect1_backgroundBlur_67_24"
            result="effect2_dropShadow_67_24"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_67_24"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="1.5"
            result="effect3_foregroundBlur_67_24"
          />
        </filter>
      </defs>
    </motion.svg>
  );
}
