import { useLayoutEffect, useState } from "react";

const UseWindowSize = (): number[] => {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    const updateSize = (): void => {
      setSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", updateSize);
    updateSize();

    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
};

export const deviseSize = () => {
  const [width] = UseWindowSize();
  const BREAKPOINT = 768;
  const isMobile = width < BREAKPOINT;
  const isPc = width >= BREAKPOINT;
  return { isMobile, isPc };
};
