import GlassMorphism from "@/app/atoms/GlassMorphism";
import Information from "../../components/information";
import Menu from "../../components/menu";
import NewsListSection from "../../components/news";
import Review from "../../components/review";
import BoardSection from "../../components/concept";

export default function Home() {
  return (
    <>
      <div className="bg-green-100 h-screen">
        <BoardSection />
        <Information />
        <Menu />
        <Review />
        <NewsListSection />
      </div>
    </>
  );
}
