import NewsContentBlock from "@/app/components/news/newsContentBlock";
import NewsTitleBlock from "@/app/components/news/newsTitleBlock";
import { News } from "@/app/libs/client";

type NewsProps = {
  news: News;
};

const NewsDetailTemplate = ({ news }: NewsProps) => {
  console.log(news);
  return (
    <>
      <NewsTitleBlock title={news.title} />
      <NewsContentBlock content={news.content} />
    </>
  );
};

export default NewsDetailTemplate;
