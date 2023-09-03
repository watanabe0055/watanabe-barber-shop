interface ReviewTextProps {
  userName: string;
  date: string;
}

const UserInfo = ({ userName, date }: ReviewTextProps) => {
  return (
    <div className="flex justify-between text-sm">
      <span className="font-bold">{userName}</span>
      <span className="italic">{date}</span>
    </div>
  );
};

export default UserInfo;
