import InformationSection from "../../components/information";
import Menu from "../../components/menu";
import NewsListSection from "../../components/news";
import Review from "../../components/review";
import BoardSection from "../../components/concept";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-gradient-start to-gradient-end">
        <BoardSection />
        <InformationSection />
        <Menu />
        <Review />
        <NewsListSection />
      </div>
    </>
  );
}
