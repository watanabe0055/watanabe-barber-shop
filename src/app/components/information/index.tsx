import { INFORMATION } from "@/app/const/infomation";
import { InformationSection } from "./atoms";

const Information = () => {
  const infomationList = INFORMATION;
  return (
    <div>
      <InformationSection information={infomationList} />
    </div>
  );
};
export default Information;
