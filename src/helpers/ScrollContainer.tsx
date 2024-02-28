import { useEffect, useRef, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

const ScrollContainer = (props) => {
  const [scrollEl, setScrollElement] = useState<HTMLDivElement | undefined>(
    undefined
  );
  const newRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (newRef.current) {
      setScrollElement(newRef.current);
    } else {
      setScrollElement(undefined);
    }
  });

  return (
    <div className={props.containerClassName} ref={newRef}>
      <ParallaxProvider scrollContainer={scrollEl}>
        {props.children}
      </ParallaxProvider>
    </div>
  );
};
