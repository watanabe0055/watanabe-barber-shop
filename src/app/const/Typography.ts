export type FontSize = "s" | "m" | "l" | "xl";
export type FontWeight = "normal" | "bold";
export type FontAlign = "left" | "center" | "right";
export type FontColor =
  | "black"
  | "white"
  | "gray"
  | "red"
  | "green"
  | "blue"
  | "yellow";

export const TYPOGRAPHY_CONST_LIST = {
  FONT_SIZE: {
    s: "text-sm",
    m: "text-base",
    l: "text-lg",
    xl: "text-xl",
  } as const,

  FONT_WEIGHT: {
    normal: "font-normal",
    bold: "font-bold",
  } as const,

  FONT_ALIGN: {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  } as const,

  FONT_COLOR: {
    black: "text-black",
    white: "text-white",
    gray: "text-gray-500",
    red: "text-red-500",
    green: "text-green-500",
    blue: "text-blue-500",
    yellow: "text-yellow-500",
  } as const,
};
