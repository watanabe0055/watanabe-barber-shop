import React from "react";

interface ReviewTextProps {
  text: string;
}

const ReviewText: React.FC<ReviewTextProps> = ({ text }) => {
  return <p className="text-base">{text}</p>;
};

export default ReviewText;
