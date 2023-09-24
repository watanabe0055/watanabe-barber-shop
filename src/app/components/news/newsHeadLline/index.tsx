import GlassMorphism from "@/app/atoms/GlassMorphism";
import Typography from "@/app/atoms/Typography";
import { News } from "@/app/libs/client";
import dayjs from "dayjs";

type NewsProps = {
  news: News;
};

/**
 * ニュース一覧のヘッドライン
 * TODO: hoverをつけているができればglassmorphismの中に入れたい
 */
export const NewsHeadLine = ({ news }: NewsProps) => {
  const publishedAt = dayjs(news.createdAt).format("YYYY年MM月DD日");
  return (
    <>
      <div className="p-5">
        <div className="transition-transform transform hover:scale-102 hover:shadow-md">
          <GlassMorphism componentType="div">
            <p className="text-sm text-gray-600">{publishedAt}</p>
            <Typography
              text={`タイトル:${news.title}`}
              size="xl"
              color="black"
              weight="bold"
            />
            <Typography text={news.description} size="l" color="gray" />
          </GlassMorphism>
        </div>
      </div>
    </>
  );
};
