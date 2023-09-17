import GlassMorphism from "@/app/atoms/GlassMorphism";
import InformationSection from "../../components/information";
import Menu from "../../components/menu";
import NewsListSection from "../../components/news";
import Review from "../../components/review";
import BoardSection from "../../components/concept";

export default function Home() {
  return (
    <>
      <div className="bg-colorHunt_hadairo">
        <BoardSection />
        <InformationSection />
        <Menu />
        <Review />
        <NewsListSection />
      </div>
    </>
  );
}
