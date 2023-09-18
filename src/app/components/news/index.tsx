import { getList } from "@/app/libs/client";
import { NewsHeadLine } from "./newsHeadLline";
import GlassMorphism from "@/app/atoms/GlassMorphism";
import Typography from "@/app/atoms/Typography";

const NewsListSection = async () => {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }
  return (
    <>
      <section>
        <GlassMorphism>
          <div className="border-b border-gray-200 pb-2 mb-4">
            <Typography text="Menu" size="xl3" weight="bold" align="center" />
          </div>
          <div className="space-y-4">
            {contents.map((news) => (
              <NewsHeadLine key={news.id} news={news} />
            ))}
          </div>
        </GlassMorphism>
      </section>
    </>
  );
};

export default NewsListSection;
