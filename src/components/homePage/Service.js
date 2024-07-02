import React from "react";
import cleaningImg from "../../images/cleaning.jpeg";

const Service = () => {
  return (
    <div className="category h-auto bg-opacity-45 backdrop-blur-md bg-gray-200 rounded-2xl drop-shadow-lg cursor-pointer hover:scale-[1.007] hover:opacity-85 transition-all duration-300">
      <img className="category-img rounded-t-2xl" src={cleaningImg} alt="" />
      <div className="category-text-container flex items-center  justify-center gap-4 pt-2 pb-2">
        <div className="category-text font-medium text-lg">Cleaning</div>
        <svg
          className="category-text-icon w-3 h-auto"
          xmlns="http://www.w3.org/2000/svg"
          width="0.5em"
          height="1em"
          viewBox="0 0 12 24"
        >
          <defs>
            <path
              id="weuiArrowOutlined0"
              fill="currentColor"
              d="m7.588 12.43l-1.061 1.06L.748 7.713a.996.996 0 0 1 0-1.413L6.527.52l1.06 1.06l-5.424 5.425z"
            />
          </defs>
          <use
            fill-rule="evenodd"
            href="#weuiArrowOutlined0"
            transform="rotate(-180 5.02 9.505)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Service;
