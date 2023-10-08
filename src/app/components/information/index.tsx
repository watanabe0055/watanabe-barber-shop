import { Information } from "./atoms";
import GlassMorphism from "@/app/atoms/GlassMorphism";
import GoogleMapComponent from "../map";
import { INFORMATION } from "@/app/const/information";
import Typography from "@/app/atoms/Typography";

const InformationSection = () => {
  const informationList = INFORMATION;
  return (
    <>
      <GlassMorphism>
        <Typography
          text="Information"
          size="xl3"
          weight="bold"
          align="center"
        />
        <div className="flex flex-col pt-3 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <Information information={informationList} />
          </div>
          <div className="flex-1">
            <GoogleMapComponent />
          </div>
        </div>
      </GlassMorphism>
    </>
  );
};
export default InformationSection;
