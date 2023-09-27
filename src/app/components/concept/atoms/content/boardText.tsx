import GlassMorphism from "@/app/atoms/GlassMorphism";
import Typography from "@/app/atoms/Typography";

type textProps = {
  text: string[];
};

export const BoardText = ({ text }: textProps) => {
  return (
    <>
      <GlassMorphism componentType="div">
        {text.map((textLine, index) => (
          <Typography key={index} text={textLine} size="m"></Typography>
        ))}
      </GlassMorphism>
    </>
  );
};
