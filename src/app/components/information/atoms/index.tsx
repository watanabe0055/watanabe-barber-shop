import { InformationSectionProps } from "@/app/type/infomation";
import { SectionContent } from "./sectionContent";
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
        <div className="ml-2">
          <SectionContent content={section} />
        </div>
      </div>
    ))}
  </>
);
