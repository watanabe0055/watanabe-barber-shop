import InformationSection from "../../components/information";
import MenuSection from "../../components/menu/menuSection";
import NewsListSection from "../../components/news";
import ReviewSection from "../../components/review";
import BoardSection from "../../components/concept";
import GoogleMapComponent from "../../components/map";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-gradient-start to-gradient-end">
        <BoardSection />
        <InformationSection />
        <MenuSection />
        <ReviewSection />
        <NewsListSection />
        <GoogleMapComponent />
      </div>
    </>
  );
}
