import React from "react";

const Review = (props) => {
  return (
    <div className="review-container border-2 rounded-2xl drop-shadow-lg p-6 flex flex-col gap-4 h-auto">
      <div className="review-top flex items-center gap-3">
        <div className="w-10 h-10 rounded-[100px] bg-greenLight"></div>
        <div className="text-lg font-medium">Saad El Addouli</div>
      </div>
      <div className="review-msg">{props.text}</div>
    </div>
  );
};

export default Review;
