import React from "react";

export default function Early() {
  return (
    <div className="double-color w-full ">
      <div className="centered mt-[32px] xl:h-[170px] flex items-center justify-center px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[152px]">
        <div className="bg-greenLight flex flex-col lg:flex-row items-center lg:justify-between w-screen px-[20px] xl:px-[40px] py-[32px]">
          <div className="max-w-[500px]">
            <h1 className="text-4xl text-greenDark mb-[8px] font-spectral">
              Early Lender
            </h1>
            <p>
              Participate in credit offerings sourced directly from borrowers
              and deliver strong risk-adjusted returns for lenders across market
              cycles.
            </p>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe84P05Vdh9xEoG1uM9ogo7qPwYv2KCHh8RFvsJOROGOPPvsA/viewform"
            target="_blank"
          >
            <button className="mt-[32px] lg:mt-0 p-5 bg-greenDark text-white rounded-lg w-[292px] md:w-[200px] lg:w-[162px]">
              Join us a Lender
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
