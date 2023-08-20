type Information = {
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

export type InformationSectionProps = {
  information: Information;
};
