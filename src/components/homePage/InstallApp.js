import React from "react";
import qrCode from "../../images/qrcode.png";

const InstallApp = () => {
  return (
    <div className="install mt-24 w-full h-auto flex items-center flex-col pl-20 pr-20 pt-14">
      <div className="install-container w-[1400px] p-24 pl-32 pr-32 bg-blueDark rounded-[20px] text-white flex justify-between items-center">
        <div className="text-container flex flex-col gap-8">
          <div className="font-semibold text-4xl">Get The Free HandyApp</div>
          <div className="w-[600px] text-xl leading-9">
            Book and manage appointments effortlessly, communicate seamlessly
            with your handyperson, explore detailed profiles and ratings, track
            their real-time location, and unlock a world of convenience at your
            fingertips.
          </div>
        </div>
        <img src={qrCode} alt="" className="w-64 h-64 rounded-[8px]" />
      </div>
    </div>
  );
};

export default InstallApp;