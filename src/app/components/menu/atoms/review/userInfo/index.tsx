import Typography from "@/app/atoms/Typography";

interface ReviewTextProps {
  userName: string;
  date: string;
}

/**
 * レビューのユーザー情報を表示するコンポーネント
 * @param data レビューのユーザー情報
 */
const UserInfo = ({ date }: ReviewTextProps) => {
  return <Typography text={date} size="s" />;
};

export default UserInfo;
