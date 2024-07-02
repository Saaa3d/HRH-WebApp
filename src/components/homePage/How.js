import React from "react";
import { Link } from "react-router-dom";
import categoriesImg from "../../images/categories_img.png";
import bookingImg from "../../images/bookings_img.png";

const How = () => {
  return (
    <div className="mt-24 w-full h-auto flex items-center flex-col pl-20 pr-20 pt-14 select-none">
      <div className="how-container w-[1400px] cursor-default">
        <div className="how-title text-[3.33vh] font-semibold mb-4">
          How It Works ?
        </div>
        <div className="steps-container flex">
          <section className="left-container flex-1 h-auto pt-4">
            <div className="step1-container w-full flex flex-col items-end">
              <div className="step-top flex justify-center items-center gap-2 mb-4">
                <div className="step-title font-bold">Browse Services</div>
                <div className="step-number w-8 h-8 rounded-xl flex justify-center items-center bg-gray-200">
                  1
                </div>
              </div>
              <div className="step-content text-end w-[650px] pr-4">
                Explore our wide range of services across various categories.
                Find the perfect handyperson for your specific needs by browsing
                detailed profiles, reading reviews, and checking ratings.
              </div>
            </div>
            <div className="step2-img-container w-full flex justify-end">
              {" "}
              <img
                className="step2-img w-[300px] h-auto rounded-lg mt-12 shadow-md"
                src={bookingImg}
                alt="sssssssssssssss"
              />
            </div>
            <div className="step3-container w-full flex flex-col items-end mt-12">
              <div className="step-top flex justify-center items-center gap-2 mb-4">
                <div className="step-title font-bold">Get the Job Done</div>
                <div className="step-number w-8 h-8 rounded-xl flex justify-center items-center bg-gray-200">
                  3
                </div>
              </div>
              <div className="step-content w-[650px] text-end pl-4">
                Your chosen handyperson will arrive at your specified location
                and time to complete the job efficiently and professionally.
                Track the progress of your booking in real-time through the app.
              </div>
            </div>

            <div className="step3-icon-container w-full h-24 mt-20 flex justify-end items-start">
              <svg
                className="step1-img w-[60px] h-auto rounded-[100px] bg-gray-200 p-2"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 16 20"
              >
                <path
                  fill="currentColor"
                  d="M3 2.75V3h.5a.5.5 0 0 0 .5-.5V2h-.25a.75.75 0 0 0-.75.75M3.75 1h4.5C9.216 1 10 1.784 10 2.75v.543l2.975 2.975A3.5 3.5 0 0 1 14 8.743V14.5a.5.5 0 0 1-1 0V8.743a2.5 2.5 0 0 0-.732-1.768L10 4.707v2.585l.854.854a.5.5 0 0 1-.707.708l-.983-.984l-.034-.034l-1.224-1.224a.738.738 0 1 0-1.043 1.044l1.491 1.49a.5.5 0 0 1 .147.354v1a1 1 0 0 0 .999 1a.5.5 0 0 1 .5.5v1.25A1.75 1.75 0 0 1 8.25 15h-4.5A1.75 1.75 0 0 1 2 13.25V2.75C2 1.784 2.784 1 3.75 1M8 14h.25a.75.75 0 0 0 .75-.75V13h-.5a.5.5 0 0 0-.5.5zm.21-1.972a2 2 0 0 1-.71-1.527v-.794l-.193-.193A2 2 0 1 1 6.066 6q.12-.14.276-.257a1.74 1.74 0 0 1 2.271.161L9 6.292V4h-.5A1.5 1.5 0 0 1 7 2.5V2H5v.5A1.5 1.5 0 0 1 3.5 4H3v8h.5A1.5 1.5 0 0 1 5 13.5v.5h2v-.5a1.5 1.5 0 0 1 1.21-1.472M8.5 3H9v-.25A.75.75 0 0 0 8.25 2H8v.5a.5.5 0 0 0 .5.5M3 13v.25c0 .414.336.75.75.75H4v-.5a.5.5 0 0 0-.5-.5zm3.596-4.197l-.44-.44a1.73 1.73 0 0 1-.508-1.3a1 1 0 1 0 .948 1.74"
                />
              </svg>
            </div>
          </section>

          {/* *************************** */}

          <section className="middle-bar bg-gray-200 w-1 h-[730px] ml-2 mr-2 relative">
            <div className="bar-end-dot absolute w-3 h-3 rounded-[200px] bg-gray-200 bottom-[-3px] left-[-4px]"></div>
          </section>

          {/* *************************** */}

          <section className="right-container flex-1 h-auto pt-4">
            <div className="step1-img-container w-full flex items-center">
              {" "}
              <Link to="/categories">
                <img
                  className="step1-img w-[300px] h-auto rounded-lg transition-all cursor-pointer shadow-sm duration-500 hover:scale-[1.007] hover:shadow-md "
                  src={categoriesImg}
                  alt="sssssssssssssss"
                />
              </Link>
            </div>
            <div className="step2-container w-full flex flex-col items-start mt-12">
              <div className="step-top flex justify-center items-center gap-2 mb-4">
                <div className="step-number w-8 h-8 rounded-xl flex justify-center items-center bg-gray-200">
                  2
                </div>
                <div className="step-title font-bold">Fill Booking Form</div>
              </div>
              <div className="step-content w-[650px] pl-4">
                Book and provide essential details about the job. Fill out a
                simple form to describe the service you need, your preferred
                time, location, etc. You can also upload pictures to help the
                handyperson understand the task better.
              </div>
            </div>
            <div className="step3-icon-container w-full h-24 mt-24">
              <svg
                className="step1-img w-[60px] h-auto rounded-[100px] bg-gray-200 p-2"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 48 48"
              >
                <g fill="currentColor">
                  <path
                    fill-rule="evenodd"
                    d="M29 13.48a1 1 0 0 1-1-1V7.882a10 10 0 0 0-3-.807v3.405a1 1 0 0 1-2 0V7.02a8.9 8.9 0 0 0-3 .69v4.77a1 1 0 0 1-2 0V8.955a7.5 7.5 0 0 0-2.04 2.808q-.144.12-.282.25c-.243.91-.217 1.672-.045 2.15a1 1 0 0 1-1.882.676a4 4 0 0 1-.148-.525c-1.466 2.051-.114 3.533 2.493 4.447a8 8 0 1 0 15.809 0c2.611-.916 3.963-2.402 2.484-4.459q-.06.27-.15.53a1 1 0 1 1-1.887-.662c.195-.556.2-1.295-.017-2.098a4 4 0 0 0-.236-.122c-.402-.99-1.104-1.983-2.099-2.818v3.35a1 1 0 0 1-1 1m-4.356 6.375a1.5 1.5 0 1 0-1.288-2.71a1.5 1.5 0 0 0 1.288 2.71M24 22c1.51 0 2.796-.956 3.287-2.295a27 27 0 0 0 2.674-.391Q30 19.652 30 20a6 6 0 1 1-11.961-.686c.842.17 1.742.3 2.674.39A3.5 3.5 0 0 0 24 22"
                    clip-rule="evenodd"
                  />
                  <path d="M25 7a1 1 0 1 0-2 0z" />
                  <path
                    fill-rule="evenodd"
                    d="M28.466 28.4c1.15.184 2.348.43 3.534.735V42H16V29.135a40 40 0 0 1 3.534-.735L23 31h2zM26 37a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
                    clip-rule="evenodd"
                  />
                  <path d="M12 30.425a29 29 0 0 1 2-.717V42h-2zm22-.717c.687.22 1.357.459 2 .717V42h-2zm-24 1.637C7.635 32.597 6 34.167 6 36v6h4zM42 36c0-1.833-1.635-3.404-4-4.655V42h4z" />
                </g>
              </svg>
            </div>
            <div className="step2-container w-full flex flex-col items-start mt-12">
              <div className="step-top flex justify-center items-center gap-2 mb-4">
                <div className="step-number w-8 h-8 rounded-xl flex justify-center items-center bg-gray-200">
                  4
                </div>
                <div className="step-title font-bold">Pay Cash</div>
              </div>
              <div className="step-content w-[650px] pl-4">
                Provide essential details about the job. Fill out a simple form
                to describe the service you need, your preferred time, and
                location. You can also upload pictures to help the handyperson
                understand the task better.
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default How;
