import React from "react";

const Footer = () => {
  return (
    <div className="footer mt-24 w-full h-[540px] bg-black flex items-center flex-col pl-20 pr-20 pt-14">
      <div className="footer-container w-[1400px] h-full p-4 text-white relative">
        <div className="text-xl">LOGO</div>
        <div className="container flex gap-72">
          <div className="text-container flex mt-6 gap-12">
            <div className="categories flex flex-col gap-4">
              <div className="opacity-60 text-white text-lg font-light">
                CATEGORIES
              </div>
              <div className="flex flex-col gap-2">
                <div>Plumbing</div>
                <div>Cleaning</div>
                <div>Electrical Services</div>
                <div>Babysitting</div>
                <div>Cooking</div>
                <div>IT Support</div>
                <div className="underline">View All</div>
              </div>
            </div>
            <div className="mobile-app flex flex-col gap-4">
              <div className="opacity-60 text-white text-lg font-light">
                MOBILE APP
              </div>
              <div className="flex flex-col gap-2">
                <div>App Store</div>
                <div>Google Play</div>
              </div>
            </div>
            <div className="legal flex flex-col gap-4">
              <div className="opacity-60 text-white text-lg font-light">
                LEGAL
              </div>
              <div className="flex flex-col gap-2">
                <div>Security</div>
                <div>Terms of use</div>
                <div>Privacy Policy</div>
                <div>Terms of Integration</div>
              </div>
            </div>
          </div>
          <div className="info-container flex flex-col gap-4">
            <div className="opacity-60 text-white text-lg font-light">
              JOIN OUR MAILING LIST
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your email address"
                className="w-[560px] h-14 rounded-[50px] pl-8"
              />
              <div className="absolute top-[2px] right-[2px] text-black font-bold bg-gray-300 rounded-[50px] p-[14px] pl-6 pr-6 cursor-pointer transition-all duration-300 hover:opacity-80">
                Sign Up
              </div>
            </div>
            <div className="opacity-60 text-white font-light">
              Stay updated with the latest news, exclusive offers, and handy
              tips.
            </div>
            <div className="opacity-60 text-white text-lg font-light mt-6">
              CONCTACT US
            </div>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <div className="text-lg">sip@gmail.com</div>
            </div>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-map-pin"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="text-lg">
                Building 1, Al Akhawayn University, Ifrane
              </div>
            </div>
            <div className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div className="text-lg">+212611001100</div>
            </div>
          </div>
        </div>
        <div className="flex gap-2 absolute bottom-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-copyright"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
          </svg>
          <div>2024</div>
        </div>
        <div className="underline absolute bottom-4 right-0 cursor-pointer">BACK TO TOP</div>
      </div>
    </div>
  );
};

export default Footer;
