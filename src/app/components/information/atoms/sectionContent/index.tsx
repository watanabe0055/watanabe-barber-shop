type ContentProps = {
  content: {
    VALUE?: string;
    STATION1?: string;
    STATION2?: string;
    TIME?: string;
    HOLIDAY?: string;
  };
};

export const SectionContent = ({ content }: ContentProps) => (
  <div style={{ color: "#555", fontSize: "16px" }}>
    {content.VALUE && <p>{content.VALUE}</p>}
    {content.STATION1 && <p>{content.STATION1}</p>}
    {content.STATION2 && <p>{content.STATION2}</p>}
    {content.TIME && <p>{content.TIME}</p>}
    {content.HOLIDAY && <p>{content.HOLIDAY}</p>}
  </div>
);
