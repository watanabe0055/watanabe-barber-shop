import Typography from "@/app/atoms/Typography";

type NewsTitleBlockProps = {
  title: string;
};
const NewsTitleBlock = ({ title }: NewsTitleBlockProps) => {
  return (
    <>
      <header className="max-w-5xl py-4 m-auto">
        <div className="mb-4">
          <Typography text={title} size="xl" weight="bold" align="center" />
        </div>
      </header>
    </>
  );
};

export default NewsTitleBlock;
