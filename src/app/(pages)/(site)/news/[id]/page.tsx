"use client";

import useSWR from "swr";
import { usePathname } from "next/navigation";
import { News } from "@/app/libs/client";
import NewsDetailTemplate from "@/app/template/news";

const NewsShowPage = () => {
  const router = usePathname();

  async function fetcher(url: string): Promise<News | null> {
    // 環境変数が未定義の場合はエラーを投げる
    if (!process.env.NEXT_PUBLIC_API_KEY) {
      throw new Error("NEXT_PUBLIC_API_KEY is not defined");
    }
    const response = await fetch(url, {
      headers: { "X-API-KEY": process.env.NEXT_PUBLIC_API_KEY },
    });
    return response.json();
  }

  const { data, error, isLoading } = useSWR(
    `https://${process.env.NEXT_PUBLIC_SERVICE_DOMAIN}.microcms.io/api/v1${router}`,
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <>{data && <NewsDetailTemplate news={data} />}</>;
};

export default NewsShowPage;
