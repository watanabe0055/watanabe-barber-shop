import { INFORMATION } from "@/app/const/infomation";
import { InformationSection } from "./atoms";
import GlassMorphism from "@/app/atoms/GlassMorphism";

const Information = () => {
  const infomationList = INFORMATION;
  return (
    <GlassMorphism>
      <InformationSection information={infomationList} />
    </GlassMorphism>
  );
};
export default Information;
