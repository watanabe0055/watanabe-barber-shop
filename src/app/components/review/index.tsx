import { DUMMY_REVIEWS } from "@/app/const/review";
import React from "react";

import UserInfo from "../menu/atoms/review/userInfo";
import ReviewText from "../menu/atoms/review/review";
import ReviewTitle from "../menu/atoms/review/reviewTitle";
import StarRating from "../menu/atoms/review/starRating";
import GlassMorphism from "@/app/atoms/GlassMorphism";
import Typography from "@/app/atoms/Typography";

const ReviewSection = () => {
  return (
    <GlassMorphism componentType="div">
      <section>
        <Typography text="Review" align="center" size="xl3" weight="bold" />
        <div className="flex flex-wrap min-w-0 gap-2 md:gap-4">
          {DUMMY_REVIEWS.map((review, index) => (
            <div key={index} className="md:w-[calc(50%-1rem)]">
              <GlassMorphism componentType="div">
                <ReviewTitle title={review.TITLE} />
                <StarRating rating={review.RATING} />
                <div className="flex justify-between">
                  <ReviewText text={review.REVIEW_TEXT} />
                  <UserInfo userName={review.USER_NAME} date={review.DATA} />
                </div>
              </GlassMorphism>
            </div>
          ))}
        </div>
      </section>
    </GlassMorphism>
  );
};

export default ReviewSection;
