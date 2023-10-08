import { Information } from "./atoms";
import GlassMorphism from "@/app/atoms/GlassMorphism";
import GoogleMapComponent from "../map";
import { INFORMATION } from "@/app/const/information";

const InformationSection = () => {
  const informationList = INFORMATION;
  return (
    <>
      <GlassMorphism>
        <Information information={informationList} />
        <GoogleMapComponent />
      </GlassMorphism>
    </>
  );
};
export default InformationSection;
