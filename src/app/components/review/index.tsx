import { DUMMY_REVIEWS } from "@/app/const/review";
import React from "react";
import ReviewText from "../menu/atoms/review/reverText";
import UserInfo from "../menu/atoms/review/userInfo";

const Review = () => {
  return (
    <div className="bg-gray-100 p-4 md:p-8 text-gray-900">
      {DUMMY_REVIEWS.map((review, index) => (
        <div key={index} className="border p-6 m-3 rounded-md space-y-4">
          <div className="pb-4">
            <h2 className="text-2xl font-semibold">{review.TITLE}</h2>

            <div className="text-xl">
              {"★".repeat(review.RATING)}
              {"☆".repeat(5 - review.RATING)}
            </div>
            <div className="flex justify-between text-sm">
              <ReviewText text={review.REVIEW_TEXT} />
              <UserInfo userName={review.USER_NAME} date={review.DATA} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
