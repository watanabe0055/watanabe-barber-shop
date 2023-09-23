import Typography from "@/app/atoms/Typography";
import dayjs from "dayjs";

type NewsTitleBlockProps = {
  createTime: string;
};
const NewsCreateTimeBlock = ({ createTime }: NewsTitleBlockProps) => {
  const createdTime = dayjs(createTime).format("YYYY年MM月DD日 HH時mm分");
  return (
    <>
      <Typography text={createdTime} size="m" color="gray" />
    </>
  );
};

export default NewsCreateTimeBlock;
