export const variants = {
  mobile: {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 500 : -500,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 500 : -500,
        opacity: 0,
      };
    },
  },
  desktop: {
    enter: (direction: number) => {
      return {
        zIndex: -1,
        y: direction > 0 ? 700 : -700,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        y: direction < 0 ? 700 : -700,
        opacity: 0,
      };
    },
  },
};
