// React
import React from "react";
// Next
import Image from "next/image";
// Components
import Paragraphs from "../containers/Paragraph";
// Images
import SegregatedWithoutAnimations from "../../../public/SegregatedWithoutAnimations.svg";
import DashboardWithOutAnimations from "../../../public/DashboardWithOutAnimations.svg";
import LensWithoutAnimations from "../../../public/LensWithoutAnimations.svg";
import Paragraph from "../containers/Paragraph";

function Why() {
  return (
    <div className="bg-white" id="why">
      <div className="centered px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[152px]">
        <div className="text-start md:text-center text-greenDark mb-[63px] xl:mb-[150px] mt-[100px] xl:mt-[135px] hiddenShowUp">
          <div className="gradient-container md:text-greenDark mb-[16px]">
            <Paragraph
              title={
                <h1 className=" text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight font-spectral">
                  The Solution
                </h1>
              }
              text={
                <p className="text-greenDark text-xl">
                  Transparent, smart and easy to understand fixed-income
                  products designed for stablecoins
                </p>
              }
            />
          </div>
        </div>
        <div>
          <div className="grid lg:grid-cols-2 ">
            <Image
              src={SegregatedWithoutAnimations.src}
              alt="Your Company"
              width={578}
              height={454}
              className="hiddenShowRight block lg:hidden mx-auto mb-[60px]"
            />
            <div className="hiddenShowLeft max-w-[500px] mx-auto">
              <Paragraphs
                title={
                  <h1 className="text-4xl lg:text-7xl font-semibold tracking-tight lg:min-h-[237px] font-spectral ">
                    Reliable Income from Fixed Yields.
                  </h1>
                }
                text={
                  <p className="text-greenDark ">
                    Institutional-grade returns derived from private markets,
                    accessible by anyone, anywhere.
                  </p>
                }
              />
            </div>
            <div className="hiddenShowRight lg:block hidden my-auto mx-auto">
              <Image
                src={SegregatedWithoutAnimations.src}
                alt="Your Company"
                width={578}
                height={454}
              />
              {/* <Segreged /> */}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 lg:my-[124px] items-center">
            <div className="hiddenShowLeft lg:block hidden mb-[100px] lg:mb-0 my-auto mx-auto">
              {/* <Loans /> */}
              <Image
                src={DashboardWithOutAnimations.src}
                alt="Your Company"
                width={578}
                height={454}
              />{" "}
            </div>
            <Image
              src={DashboardWithOutAnimations.src}
              alt="Your Company"
              width={578}
              height={454}
              className="hiddenShowRight block lg:hidden mx-auto mb-[60px]"
            />{" "}
            <div className="hiddenShowRight max-w-[500px] mx-auto">
              <Paragraphs
                title={
                  <h1 className="text-4xl lg:text-7xl font-semibold tracking-tight font-spectral">
                    Without the Market Volatility
                  </h1>
                }
                text={
                  <p className="text-greenDark">
                    No volatility from crypto, stock markets, individual
                    companies or counterparties.
                  </p>
                }
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2">
            <Image
              src={LensWithoutAnimations.src}
              alt="Your Company"
              width={578}
              height={454}
              className="hiddenShowRight block lg:hidden mx-auto"
            />{" "}
            <div className="hiddenShowLef mx-auto">
              <Paragraphs
                title={
                  <h1 className="text-4xl lg:text-7xl font-semibold tracking-tight font-spectral text-nowrap">
                    Clear Route to Compounding
                  </h1>
                }
                text={
                  <p className="text-greenDark  max-w-[500px]">
                    Enduring and transparent products designed to enable
                    long-term compounding through predictable income.
                  </p>
                }
              />{" "}
            </div>
            <Image
              src={LensWithoutAnimations.src}
              alt="Your Company"
              width={565}
              height={480}
              className="hiddenShowRight lg:block hidden my-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
