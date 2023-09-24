import { NewsHeadLine } from "@/app/components/news/newsHeadLline";
import { getList } from "@/app/libs/client";
import Link from "next/link";
import React from "react";

const NewsIndexPage = async () => {
  const { contents } = await getList();
  return (
    <>
      <div className="h-screen bg-gradient-to-r from-gradient-start to-gradient-end">
        <div className="space-y-4">
          {contents.map((news) => (
            <Link href={`/news/${news.id}`} key={news.id}>
              <NewsHeadLine key={news.id} news={news} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsIndexPage;
