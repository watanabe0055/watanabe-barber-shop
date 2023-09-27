import { getList } from "@/app/libs/client";
import { NewsHeadLine } from "./newsHeadLline";
import GlassMorphism from "@/app/atoms/GlassMorphism";
import Typography from "@/app/atoms/Typography";
import Link from "next/link";

const NewsListSection = async () => {
  const { contents } = await getList({ limit: 1, orders: "-publishedAt" });

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }
  return (
    <>
      <section>
        <GlassMorphism>
          <div className="pb-2 mb-4 border-b border-gray-200">
            <Typography text="News" size="xl3" weight="bold" align="center" />
          </div>
          <div className="space-y-4">
            {contents.map((news) => (
              <Link href={`/news/${news.id}`} key={news.id}>
                <NewsHeadLine news={news} />
              </Link>
            ))}
          </div>
        </GlassMorphism>
      </section>
    </>
  );
};

export default NewsListSection;
