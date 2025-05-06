import { useState, useEffect } from "react";

const getBreakpoint = (): string => {
  if (typeof window === "undefined") return "desktop";

  if (window.innerWidth >= 320) return "xs";
  if (window.innerWidth >= 640) return "sm";
  if (window.innerWidth >= 768) return "md";
  if (window.innerWidth >= 1024) return "lg";
  if (window.innerWidth >= 1280) return "xl";
  if (window.innerWidth >= 1536) return "2xl";
  if (window.innerWidth >= 1920) return "3xl";

  return "desktop";
};

export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(getBreakpoint());

  useEffect(() => {
    const handleResize = () => setBreakpoint(getBreakpoint());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
};
