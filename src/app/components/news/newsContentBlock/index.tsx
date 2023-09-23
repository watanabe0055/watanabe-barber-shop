import React from "react";
type NewsTitleBlockProps = {
  content?: string;
};
/**
 * ニュース詳細のコンテンツブロック
 * @param 取得した記事のコンテンツ
 * TODO: objectで取得できるようになったらもっとモダンにする
 */
const NewsContentBlock = ({ content }: NewsTitleBlockProps) => {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `${content}`,
      }}
    />
  );
};

export default NewsContentBlock;
