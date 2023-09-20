/**
 * URLからニュースのクエリを取得する
 * @param url
 * @returns　　news_id
 */
export const getNewsQuery = (url: string): string => {
  const parts = url.split("/");
  const extractedPart = parts[parts.length - 1];
  return extractedPart;
};
