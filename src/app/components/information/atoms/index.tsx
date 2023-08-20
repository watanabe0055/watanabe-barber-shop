import { InformationSectionProps } from "@/app/type/infomation";
import { SectionContent } from "./sectionContent";
import { SectionTitle } from "./title";
import { BoardTitle } from "../../concept/atoms/title";

/**
 * インフォメーションコンポーネント
 * @returns
 */
export const InformationSection = ({
  information,
}: InformationSectionProps) => (
  <div className="bg-gray-100 p-4 md:p-8">
    <div className="bg-white p-4 rounded-lg shadow-md max-w-xl mx-auto">
      <BoardTitle title={"Information"} />
      <div className="bg-white p-4 rounded-lg shadow-md">
        {Object.entries(information).map(([key, section]) => (
          <div key={key} className="my-4">
            <SectionTitle text={section.TITLE} />
            <SectionContent content={section} />
          </div>
        ))}
      </div>
    </div>
  </div>
);
