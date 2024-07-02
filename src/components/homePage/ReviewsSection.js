import React from "react";
import Review from "./Review";

const ReviewsSection = () => {
  return (
    <div className="reviews mt-24 w-full h-auto flex items-center flex-col pl-20 pr-20 pt-14">
      <div className="w-[1400px]">
        <div className="reviews-container pl-32 pr-32 gap-6 grid grid-cols-3">
          <Review
            text={
              "Lorem ipsum dolor, ccusantium magnam? Odit recusandae atquccusantium magnam? Odit recusandae atque temporibus."
            }
          />
          <Review
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis modi voluptates nemo alias voluptatum impedit totam tempora consequatur asperiores deleniti, sit maxime repellat deserunt reprehenderit nobis minima? Alias, aperiam excepturi."
            }
          />
          <Review
            text={
              "Lorem ipsum dolor sit amet consectetur adipo alias voluptatum impedit totam tempora consequatur asperiores deleniti, sit maxime repellat deserunt reprehenderit nobis minima? Alias, aperiam excepturi."
            }
          />
          <Review
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis modi voluptates nemo alias voluptatum impedit totam tempora consequatur asperiores deleniti, sit maxime repellat deserunt reprehenderit nobis minima? Alias, aperiam excepturi."
            }
          />
          <Review
            text={
              "Lorem ipsum dolor, ccusantium magnam? Odit recusandae atquccusantium magnam? Odit recusandae atque temporibus."
            }
          />
          <Review
            text={
              "Lorem ipsum dolor sit amet consectetur adipo alias voluptatum impedit totam tempora consequatur asperiores deleniti, sit maxime repellat deserunt reprehenderit nobis minima? Alias, aperiam excepturi."
            }
          />
          <Review
            text={
              "Lorem ipsum dolor, ccusantium magnam? Odit recusandae atquccusantium magnam? Odit recusandae atque temporibus."
            }
          />
          <Review
            text={
              "Lorem ipsum dolor sit amet consectetur adipo alias voluptatum impedit totam tempora consequatur asperiores deleniti, sit maxime repellat deserunt reprehenderit nobis minima? Alias, aperiam excepturi."
            }
          />
          <Review
            text={
              "Lorem ipsum dolor, ccusantium magnam? Odit recusandae atquccusantium magnam? Odit recusandae atque temporibus."
            }
          />
        </div>
        <div className="review-btn-container flex justify-center items-center w-full">
            <div className="btn-text bg-black font-semibold text-white pt-2 pb-2 pl-6 pr-6 rounded cursor-pointer transition-all duration-300 mt-4 hover:opacity-70">Show More...</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
