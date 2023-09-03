interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  return (
    <div className="text-xl">
      {"★".repeat(rating)}
      {"☆".repeat(5 - rating)}
    </div>
  );
};

export default StarRating;
