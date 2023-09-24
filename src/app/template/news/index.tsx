import NewsContentBlock from "@/app/components/news/newsContentBlock";
import NewsCreateTimeBlock from "@/app/components/news/newsCreateTimeBlock";
import NewsTitleBlock from "@/app/components/news/newsTitleBlock";
import { News } from "@/app/libs/client";

type NewsProps = {
  news: News;
};

const NewsDetailTemplate = ({ news }: NewsProps) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(news.content, "text/html");

  doc.body.childNodes.forEach((node) => {
    console.log(node);
  });

  return (
    <>
      <NewsTitleBlock title={news.title} />
      <NewsCreateTimeBlock createTime={news.createdAt} />
      <NewsContentBlock content={news.content} />
    </>
  );
};

export default NewsDetailTemplate;
