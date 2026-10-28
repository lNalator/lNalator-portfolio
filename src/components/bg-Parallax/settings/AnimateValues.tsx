// Block poses per route: [circle, band, rect], as top-left offsets in vw/vh.
// Blocks bleed off the screen edges so they read as layered design blocks behind the content.
export const AnimateValues = {
  desktop: {
    "/": [
      { x: "66vw", y: "-16vh", rotate: 0 },
      { x: "-12vw", y: "74vh", rotate: -12 },
      { x: "-7vw", y: "26vh", rotate: 14 },
    ],
    "/projects": [
      { x: "-15vw", y: "60vh", rotate: 0 },
      { x: "-10vw", y: "6vh", rotate: 9 },
      { x: "80vw", y: "34vh", rotate: -12 },
    ],
    "/contact": [
      { x: "-17vw", y: "6vh", rotate: 0 },
      { x: "-10vw", y: "82vh", rotate: -6 },
      { x: "76vw", y: "-6vh", rotate: 16 },
    ],
  },
  mobile: {
    "/": [
      { x: "38vw", y: "-8vh", rotate: 0 },
      { x: "-30vw", y: "80vh", rotate: -14 },
      { x: "-16vw", y: "34vh", rotate: 12 },
    ],
    "/projects": [
      { x: "-40vw", y: "58vh", rotate: 0 },
      { x: "-30vw", y: "10vh", rotate: 12 },
      { x: "66vw", y: "40vh", rotate: -10 },
    ],
    "/contact": [
      { x: "-30vw", y: "2vh", rotate: 0 },
      { x: "-30vw", y: "86vh", rotate: -8 },
      { x: "64vw", y: "8vh", rotate: 16 },
    ],
  },
};

// How far each block drifts (in vh) from top to bottom of the page: deeper layers move less.
export const SCROLL_TRAVEL = ["-14vh", "-26vh", "-40vh"];
