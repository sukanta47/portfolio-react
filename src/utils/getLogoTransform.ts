
export interface LogoTransform {
  x: number;
  y: number;
  scale: number;
}
export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export const getLogoTransform = (
  show: boolean,
  bp: Breakpoint
): LogoTransform => {
  if (!show) {
    return { x: 0, y: 0, scale: 1 };
  }

  const y = bp === "xs" ? -4 : bp === "sm" ? 0 : 2;

  const xMap: Record<Breakpoint, number> = {
    xs: 18,
    sm: 8,
    md: -4,
    lg: -10,
    xl: -12,
    "2xl": -14,
  };

  return { x: xMap[bp], y, scale: 1.3 };
};
