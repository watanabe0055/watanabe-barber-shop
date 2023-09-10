import Typography from "@/app/atoms/Typography";
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
        <Typography
          text={`タイトル:${news.title}`}
          size="xl"
          color="black"
          weight="bold"
        />
        <Typography text={news.description} size="l" color="gray" />
      </div>
    </>
  );
};
