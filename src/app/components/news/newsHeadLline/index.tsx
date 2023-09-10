import { News } from "@/app/libs/client";
import dayjs from "dayjs";

type NewsProps = {
  news: News;
};

export const NewsHeadLine = ({ news }: NewsProps) => {
  const publishedAt = dayjs(news.createdAt).format("YYYY年MM月DD日");
  return (
    <>
      <div>
        <p>{publishedAt}</p>
        <h3>タイトル:{news.title}</h3>
        <h4>{news.description}</h4>
      </div>
    </>
  );
};
