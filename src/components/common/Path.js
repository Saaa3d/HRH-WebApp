import React from "react";

const Path = () => {
  return (
    <div className="mt-20 w-[1400px]">
      <div className="path">
        <span className="transition-all duration-300 opacity-70 cursor-pointer hover:opacity-100 mr-2">
          Home
        </span>
        <span className="opacity-70">></span>
        <span className="transition-all duration-300 opacity-70 cursor-pointer hover:opacity-100 ml-2">
          Bookings History
        </span>
      </div>
    </div>
  );
};

export default Path;
