import { News } from "@/app/libs/client";
import { NewsHeadLine } from "./newsHeadLline";

type NewsProps = {
  news: News;
};
const NewsList = ({ news }: NewsProps) => {
  return (
    <>
      <NewsHeadLine news={news} />
    </>
  );
};

export default NewsList;
