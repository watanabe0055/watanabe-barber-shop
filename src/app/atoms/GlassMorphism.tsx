"use client";
import { deviseSize } from "../lib/device";

type ComponentType = "section" | "div";
type GlassMorphismColor = {
  RED: "bg-red-200";
  GREEN: "bg-green-200";
  BLUE: "bg-blue-200";
  YELLOW: "bg-yellow-200";
  GRAY: "bg-gray-200";
  WHITE: "bg-white";
};

type GlassMorphismProps = {
  children: React.ReactNode;
  componentType?: ComponentType;
  GlassmorphColor?: GlassMorphismColor;
  onHover?: boolean;
};
/**
 * グラスモーフィズムのコンポーネント
 *  @param children 表示するコンポーネント
 *  @param componentType　sectionかdivか
 *  @param GlassmorphColor　色
 *  @param onHover　hover時のアニメーション
 */
const GlassMorphism = ({
  componentType,
  children,
  onHover = false,
}: GlassMorphismProps) => {
  const { isMobile } = deviseSize();
  const hoverClasses = onHover
    ? "transform transition-transform duration-300 hover:scale-105"
    : "";

  return (
    <>
      {isMobile ? (
        <div className="p-2">
          <div
            className={`p-5 border rounded-md shadow-lg bg-gray-200/30 backdrop-blur-lg border-gray-200/30 ${hoverClasses}`}
          >
            {children}
          </div>
        </div>
      ) : (
        <div className={componentType === "div" ? "p-3" : "p-10"}>
          <div
            className={`p-5 border rounded-md shadow-lg bg-gray-200/30 backdrop-blur-lg border-gray-200/30 ${hoverClasses}`}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default GlassMorphism;
