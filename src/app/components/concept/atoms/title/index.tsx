import Typography from "@/app/atoms/Typography";

type titleProps = {
  title: string;
};

export const BoardTitle = ({ title }: titleProps) => {
  return (
    <div className="text-center p-4">
      <Typography
        text={title}
        size="xl3"
        weight="bold"
        align="center"
      ></Typography>
    </div>
  );
};
