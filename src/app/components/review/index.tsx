import { DUMMY_REVIEWS } from "@/app/const/review";
import React from "react";

import UserInfo from "../menu/atoms/review/userInfo";
import ReviewText from "../menu/atoms/review/review";
import ReviewTitle from "../menu/atoms/review/reviewTitle";
import StarRating from "../menu/atoms/review/starRating";
import GlassMorphism from "@/app/atoms/GlassMorphism";

const ReviewSection = () => {
  return (
    <GlassMorphism>
      <section className="flex flex-wrap gap-4 md:gap-8 min-w-0">
        {DUMMY_REVIEWS.map((review, index) => (
          <div
            key={index}
            className="border p-6 rounded-md space-y-4 w-full md:w-[calc(50%-1rem)] min-w-0"
          >
            <div className="pb-4">
              <ReviewTitle title={review.TITLE} />
              <StarRating rating={review.RATING} />
              <div className="flex justify-between text-sm">
                <ReviewText text={review.REVIEW_TEXT} />
                <UserInfo userName={review.USER_NAME} date={review.DATA} />
              </div>
            </div>
          </div>
        ))}
      </section>
    </GlassMorphism>
  );
};

export default ReviewSection;
