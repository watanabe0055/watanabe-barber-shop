import Image from "next/image";
import { INFORMATION } from "@/app/const/infomation";
import { Information } from "./atoms";
import GlassMorphism from "@/app/atoms/GlassMorphism";

const InformationSection = () => {
  const infomationList = INFORMATION;
  return (
    <>
      <GlassMorphism>
        <Information information={infomationList} />
      </GlassMorphism>
    </>
  );
};
export default InformationSection;
