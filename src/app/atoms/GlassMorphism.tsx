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
  // componentType: ComponentType;
  // GlassmorphColor: GlassMorphismColor;
};

const GlassMorphism = ({ children }: GlassMorphismProps) => {
  return (
    <div className="p-10">
      <div
        className="bg-gray-200/30 backdrop-blur-lg
    rounded-md border border-gray-200/30 shadow-lg p-5"
      >
        {children}
      </div>
    </div>
  );
};

export default GlassMorphism;
