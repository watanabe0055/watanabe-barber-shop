import Board from "../components/concept";
import Information from "../components/information";
import Menu from "../components/menu";
import NewsListSection from "../components/news";
import Review from "../components/review";

export default async function StaticPage() {
  return (
    <>
      <Board />
      <Information />
      <Menu />
      <Review />
      <NewsListSection />
    </>
  );
}
