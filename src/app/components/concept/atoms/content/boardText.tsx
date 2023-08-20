type textProps = {
  text: string[] | string;
};

export const BoardText = ({ text }: textProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      {typeof text === "string" ? (
        <p className="text-gray-700 text-base">{text}</p>
      ) : (
        text.map((textLine, index) => (
          <p key={index} className="text-gray-700 text-base">
            {textLine}
          </p>
        ))
      )}
    </div>
  );
};
