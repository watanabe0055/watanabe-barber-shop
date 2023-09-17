import { InformationSectionProps } from "@/app/type/infomation";
import { SectionContent } from "./sectionContent";
import { SectionTitle } from "./title";
import { BoardTitle } from "../../concept/atoms/title";
import Typography from "@/app/atoms/Typography";

/**
 * インフォメーションコンポーネント
 * @returns
 */
export const Information = ({ information }: InformationSectionProps) => (
  <>
    <Typography text="Information" size="xl3" weight="bold" align="center" />
    {Object.entries(information).map(([key, section]) => (
      <div key={key} className="my-4">
        <Typography text={section.TITLE} size="xl" weight="bold" />
        <SectionContent content={section} />
      </div>
    ))}
  </>
);
