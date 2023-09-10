/**
 * フォントサイズ
 */
export const FONT_SIZE: { [key in FontSize]: string } = {
  s: "text-sm",
  m: "text-base",
  l: "text-lg",
  xl: "text-xl",
};

export type FontSize = "s" | "m" | "l" | "xl";

export const FONT_WEIGHT: { [key in FontWeight]: string } = {
  normal: "font-normal",
  bold: "font-bold",
};

export type FontWeight = "normal" | "bold";
