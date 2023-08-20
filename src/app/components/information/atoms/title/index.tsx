type TitleProps = {
  text: string;
};

export const SectionTitle = ({ text }: TitleProps) => (
  <h3 style={{ color: "#333", fontSize: "18px", fontWeight: "bold" }}>
    {text}
  </h3>
);
