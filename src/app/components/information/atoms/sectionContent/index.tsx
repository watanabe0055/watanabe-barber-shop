import Typography from "@/app/atoms/Typography";

type SectionContentProps = {
  content: {
    TITLE: string;
    VALUE?: string;
    TEXT_LIST?: string[];
    STATION1?: string;
    STATION2?: string;
    TIME?: string;
    HOLIDAY?: string;
  };
};

export const SectionContent: React.FC<SectionContentProps> = ({ content }) => {
  const renderContent = (key: keyof typeof content) => {
    const value = content[key];
    if (Array.isArray(value)) {
      return value.map((text, idx) => (
        <Typography key={idx} text={text} size="m" color="gray" />
      ));
    }
    return value && <Typography text={value} size="m" color="gray" />;
  };

  return (
    <>
      {renderContent("VALUE")}
      {renderContent("TEXT_LIST")}
      {renderContent("STATION1")}
      {renderContent("STATION2")}
      {renderContent("TIME")}
      {renderContent("HOLIDAY")}
    </>
  );
};
