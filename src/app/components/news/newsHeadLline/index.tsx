import { News } from "@/app/libs/client";
import dayjs from "dayjs";

type NewsProps = {
  news: News;
};

export const NewsHeadLine = ({ news }: NewsProps) => {
  const publishedAt = dayjs(news.createdAt).format("YYYY年MM月DD日");
  return (
    <>
      <div className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow">
        <p className="text-sm text-gray-600">{publishedAt}</p>
        <h3 className="text-xl font-semibold my-2">タイトル: {news.title}</h3>
        <h4 className="text-lg text-gray-800">{news.description}</h4>
      </div>
    </>
  );
};
