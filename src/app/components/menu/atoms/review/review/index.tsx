import Typography from "@/app/atoms/Typography";
import React from "react";

interface ReviewTextProps {
  text: string;
}

const ReviewText: React.FC<ReviewTextProps> = ({ text }) => {
  return <Typography text={text} />;
};

export default ReviewText;
