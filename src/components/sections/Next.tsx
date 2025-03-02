// React
import React from "react";

export default function Next() {
  return (
    <div className="double-color-green w-full ">
      <div className="centered h-[440px] flex items-center justify-center px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[152px] text-center">
        <div className="bg-neutral2 w-screen h-[440px] px-[20px] md:px-[40px] py-[32px]">
          <div className="xl:mt-[106px] my-[56px]">
            <h1 className="text-5xl text-greenDark mb-[64px] font-spectral">
              Join the new era of private wealth
            </h1>
          </div>
          <a href="https://x.com/olivetreeyield" target="_blank">
            <button className="btn mt-[32px] lg:mt-0 px-5 py-3 bg-greenLight text-greenDark rounded-lg w-[292px] md:w-[200px] lg:w-[162px] font-semibold">
              Work with Us
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
