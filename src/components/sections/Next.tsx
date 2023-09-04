import React from "react";

export default function Next() {
  return (
    <div className="double-color w-screen h-[440px] flex items-center justify-center px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[152px] text-center">
      <div className="bg-neutral2 w-screen h-[440px] px-[20px] md:px-[40px] py-[32px] ">
        <div className="xl:mt-[106px] mt-[56px]">
          <h1 className="text-4xl text-greenDark mb-[16px] font-spectral">
            The next-generation of private credit
          </h1>
          <p className="max-w-[586px] mx-auto my-[16px]">
            Building the next generation of lending protocols and bring superior
            financing capabilities on-chain
          </p>
        </div>
        <button className="mt-[32px] lg:mt-0 px-5 py-3 bg-greenLight text-greenDark rounded-lg w-[292px] md:w-[200px] lg:w-[162px] font-semibold">
          Work with Us
        </button>
      </div>
    </div>
  );
}
