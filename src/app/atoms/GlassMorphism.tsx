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
};

const GlassMorphism = ({ componentType, children }: GlassMorphismProps) => {
  return (
    <div className={componentType === "div" ? "p-3" : "p-10"}>
      <div className="p-5 border rounded-md shadow-lg bg-gray-200/30 backdrop-blur-lg border-gray-200/30">
        {children}
      </div>
    </div>
  );
};

export default GlassMorphism;
