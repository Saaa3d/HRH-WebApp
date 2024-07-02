import React from "react";
import { Link } from "react-router-dom";
import happyCustomer from "../../images/happy_customer.png";
import workerFast from "../../images/worker_fast.webp";

const Hero = () => {
  return (
    <div className="mt-16 w-full h-[600px] flex items-center flex-col pl-20 pr-20 pt-14 select-none">
      <div className="hero-container w-[1400px]">
        <section className="hero-image-section w-full h-80 flex justify-end">
          <img className="w-96 h-auto" src={happyCustomer} alt="" />
        </section>
        <section className="hero-text-section w-full h-[400px] mt-[-100px] flex">
          <div>
            <div className="hero-text text-7xl w-[600px] font-bold drop-shadow-2xl mb-6 cursor-default select-none">
              Find <span className="text-greenLight">Trusted</span> Handypersons
              for <span className="text-greenLight">Every Need</span>
            </div>
            <div className="hero-text-desc text-lg font-medium relative cursor-default select-none">
              Browse, book, and get the job done{" "}
              <span className="text-greenLight">quickly</span>
              <img
                className="w-32 h-auto opacity-70 absolute top-[74px] left-[410px] transform -translate-x-1/2 -translate-y-1/2"
                src={workerFast}
                alt=""
              />
              <svg
                className="worker-run w-[600px] h-auto absolute top-[-400px] left-[-350px] opacity-5"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="m8.914 24.5l4.257-4.257l-1.414-1.414L7.5 23.086l-.793-.793a1 1 0 0 0-1.414 0l-4 4a1 1 0 0 0 0 1.414l3 3a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414ZM5 28.586L3.414 27L6 24.414L7.586 26Z"
                />
                <path
                  fill="currentColor"
                  d="M24 30a6.007 6.007 0 0 1-6-6a5.8 5.8 0 0 1 .21-1.547L9.548 13.79A6 6 0 0 1 8 14a5.976 5.976 0 0 1-5.577-8.184l.558-1.421l3.312 3.312a1.023 1.023 0 0 0 1.414 0a1 1 0 0 0 0-1.414L4.393 2.979l1.423-.557A5.977 5.977 0 0 1 14 8a5.8 5.8 0 0 1-.21 1.547l8.663 8.663A6 6 0 0 1 24 18a5.976 5.976 0 0 1 5.577 8.184l-.557 1.421l-3.313-3.312a1.023 1.023 0 0 0-1.413 0a1 1 0 0 0-.001 1.414l3.313 3.313l-1.422.558A6 6 0 0 1 24 30M10.063 11.476l10.46 10.462l-.239.609a3.975 3.975 0 0 0 3.466 5.445l-.871-.87a3 3 0 0 1 0-4.243a3.07 3.07 0 0 1 4.243 0l.87.871a3.976 3.976 0 0 0-5.446-3.466l-.609.239l-10.46-10.46l.24-.61A3.976 3.976 0 0 0 8.25 4.008l.87.87a3 3 0 0 1 0 4.243a3.07 3.07 0 0 1-4.243 0l-.87-.871a3.975 3.975 0 0 0 5.445 3.466Z"
                />
                <path
                  fill="currentColor"
                  d="M29.123 2.85a3.07 3.07 0 0 0-4.243 0l-7.48 7.48l1.414 1.414l7.48-7.48a1.024 1.024 0 0 1 1.414 0a1 1 0 0 1 0 1.414l-7.48 7.48l1.414 1.415l7.48-7.48a3.003 3.003 0 0 0 0-4.243"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-start items-end w-full pb-14">
            <div className="btn-book-service-container relative">
              <Link to="/booking">
                <div className="border-black font-bold text-[24px] flex justify-center items-center gap-4 pt-1 pb-1 pl-4 pr-2 bg-green text-white rounded-xl drop-shadow- transition-all duration-300 hover:opacity-85 hover:cursor-pointer hover:scale-[1.01] select-none">
                  Book Service
                  <svg
                    className="transform rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m4 12l-.354-.354l-.353.354l.353.354zm15 .5a.5.5 0 0 0 0-1zM9.646 5.646l-6 6l.708.708l6-6zm-6 6.708l6 6l.708-.708l-6-6zM4 12.5h15v-1H4z"
                    />
                  </svg>
                </div>
              </Link>

              <span className="absolute bottom-[70px] right-[-60px] text-black font-medium text-[12px] rotate-[20deg] opacity-70 cursor-default select-none">
                Book in seconds
              </span>
              <svg
                className="absolute text-black bottom-[65px] right-[30px] transform rotate-[-100deg] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                >
                  <path d="m8 5l-5 5l5 5" />
                  <path d="M3 10h8c5.523 0 10 4.477 10 10v1" />
                </g>
              </svg>
            </div>
          </div>
        </section>
        <section className="hero-scroll-container flex flex-col items-end mt-[-50px] opacity-60 animate-upDown">
          <div className="flex flex-col items-center gap-2">
            <div className="select-none">SCROLL</div>
            <svg
              className="w-6 h-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M16.5 3.5a.5.5 0 0 0-1 0v23.833l-9.655-9.195a.5.5 0 0 0-.69.724l10.5 10a.5.5 0 0 0 .69 0l10.5-10a.5.5 0 0 0-.69-.724L16.5 27.333z"
              />
            </svg>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
