import { SectionContent } from "./sectionContent";
import { SectionTitle } from "./title";

export type Information = {
  ADDRESS: {
    TITLE: string;
    VALUE: string;
  };
  ACCESS: {
    TITLE: string;
    VALUE: string;
  };
  STATION: {
    TITLE: string;
    STATION1: string;
    STATION2: string;
  };
  PARKING: {
    TITLE: string;
    VALUE: string;
  };
  BUSINESS_DAY: {
    TITLE: string;
    TIME: string;
    HOLIDAY: string;
  };
};

type InformationSectionProps = {
  information: Information;
};

export const InformationSection = ({
  information,
}: InformationSectionProps) => (
  <div className="bg-gray-100 p-4 md:p-8">
    <div className="bg-white p-4 rounded-lg shadow-md max-w-xl mx-auto">
      {Object.entries(information).map(([key, section]) => (
        <div key={key} className="my-4">
          <SectionTitle text={section.TITLE} />
          <SectionContent content={section} />
        </div>
      ))}
    </div>
  </div>
);
