type titleProps = {
  title: string;
};

export const BoardTitle = ({ title }: titleProps) => {
  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
    </div>
  );
};
