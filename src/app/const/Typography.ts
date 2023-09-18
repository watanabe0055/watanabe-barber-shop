export type FontSize = "s" | "m" | "l" | "xl" | "xl2" | "xl3";
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
    /**
     * text-sm: 12px
     */
    s: "text-sm",
    /**
     * text-base: 14px
     */
    m: "text-base",
    /**
     * text-lg: 16px
     */
    l: "text-lg",
    /**
     * text-xl: 18px
     */
    xl: "text-xl",
    /**
     * text-2xl: 20px
     */
    xl2: "text-2xl",
    /**
     * text-3xl: 24px
     */
    xl3: "text-3xl",
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
