import NewsTitleBlock from "@/app/components/news/newsTitleBlock";
import { News } from "@/app/libs/client";

type NewsProps = {
  news: News;
};

const NewsDetailTemplate = ({ news }: NewsProps) => {
  return (
    <>
      <NewsTitleBlock title={news.title} />
    </>
  );
};

export default NewsDetailTemplate;
