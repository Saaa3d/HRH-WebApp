import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="fixed top-0 z-50 h-16 w-full border flex justify-center pl-[80px] pr-[80px] bg-white">
        <div className="flex w-[1400px]">
          <section className="flex-1 h-full flex items-center gap-28">
            <div>LOGO</div>
            <div className="flex gap-14 font-bold">
              {/* <div className="border-b-2 border-black">Home</div> */}
              <Link to={`/`}>Home</Link>
              <Link to={`/categories`}>Categories</Link>
              <Link to={`/history`}>Bookings</Link>
            </div>
          </section>
          <section className="flex-1 h-full pl-48 flex items-center justify-between gap-20">
            <section className="h-6 flex gap-[2px]">
              <input
                type="text"
                placeholder="Plumber, Cleaning Lady, Electrician ..."
                className=" border rounded-xs w-72 border-black text-xs px-2"
              />
              <div className="border border-black flex justify-center items-center p-[1px]">
                <svg
                  className="w-5 h-auto cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"
                  />
                </svg>
              </div>
            </section>
            <section className="flex items-center gap-4">
              <svg
                className="w-6 h-auto cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 1024 1024"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M489.493 111.658c30.658-1.792 45.991 36.44 22.59 56.329C457.831 214.095 426 281.423 426 354c0 134.757 109.243 244 244 244c72.577 0 139.905-31.832 186.014-86.084c19.868-23.377 58.064-8.102 56.332 22.53C900.4 745.823 725.141 912 512.5 912C291.31 912 112 732.69 112 511.5c0-211.39 164.287-386.024 374.198-399.649l.206-.013z"
                />
              </svg>
              <svg
                className="w-5 h-auto cursor-pointer"
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
                  stroke-width="1.5"
                >
                  <path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2S2 6.477 2 12" />
                  <path d="M13 2.05S16 6 16 12s-3 9.95-3 9.95m-2 0S8 18 8 12s3-9.95 3-9.95M2.63 15.5h18.74m-18.74-7h18.74" />
                </g>
              </svg>
              <Link to={"/login"}>
                <svg
                  className="w-6 h-auto cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="currentColor"
                    d="M254 136a6 6 0 0 1-6 6h-18v18a6 6 0 0 1-12 0v-18h-18a6 6 0 0 1 0-12h18v-18a6 6 0 0 1 12 0v18h18a6 6 0 0 1 6 6m-57.41 60.14a6 6 0 1 1-9.18 7.72C166.9 179.45 138.69 166 108 166s-58.89 13.45-79.41 37.86a6 6 0 0 1-9.18-7.72C35.14 177.41 55 164.48 77 158.25a66 66 0 1 1 62 0c22 6.23 41.86 19.16 57.59 37.89M108 154a54 54 0 1 0-54-54a54.06 54.06 0 0 0 54 54"
                  />
                </svg>
              </Link>
            </section>
          </section>
        </div>
      </header>
    </div>
  );
};

export default Header;
