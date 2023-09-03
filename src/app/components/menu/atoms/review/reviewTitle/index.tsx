interface ReviewTitleProps {
  title: string;
}

const ReviewTitle: React.FC<ReviewTitleProps> = ({ title }) => {
  return <h2 className="text-2xl font-semibold">{title}</h2>;
};

export default ReviewTitle;
