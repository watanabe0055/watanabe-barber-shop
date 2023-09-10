import { getList } from "@/app/libs/client";
import { NewsHeadLine } from "./newsHeadLline";

const NewsListSection = async () => {
  const { contents } = await getList();

  if (!contents || contents.length === 0) {
    return <h1>No contents</h1>;
  }
  return (
    <>
      <section className="board bg-gray-100 p-4 md:p-8 text-gray-900">
        <div className="bg-white p-4 rounded-lg shadow-md max-w-xl mx-auto">
          <h3 className="p-5 text-2xl font-bold text-center border-b border-gray-200 mb-4">
            Menu
          </h3>
          <div className="space-y-4">
            {contents.map((news) => (
              <NewsHeadLine key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsListSection;
