import React from "react";
import cleaningImg from "../../images/cleaning.jpeg";
import Service from "./Service";

const Popular = () => {
  const popularServices = new Array(8).fill(0);

  return (
    <div className="popular mt-24 w-full h-auto flex items-center flex-col pl-20 pr-20 pt-14">
      <div className="popular-container w-[1400px] ">
        <div className="popular-title text-[3.33vh] font-semibold">
          Popular Services
        </div>
        <div className="categories-container w-full h-auto pt-20 pb-12 pl-32 pr-32 grid grid-cols-4 gap-8">
          {popularServices.map((_, index) => (
            <Service key={index} />
          ))}
        </div>
        <div className="categories-btn-container flex justify-center items-center w-full">
            <div className="btn-text bg-black font-semibold text-white pt-2 pb-2 pl-6 pr-6 rounded cursor-pointer transition-all duration-300 hover:opacity-70">See All Categories</div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
