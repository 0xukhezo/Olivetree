// React
import React from "react";
// Next
import Image from "next/image";
// Components
import Paragraphs from "../containers/Paragraph";
import Loans from "../imagesSvg/Loans";
import Segreged from "../imagesSvg/Segregated";
// Images
import Lens from "../../../public/Lens.svg";
import LoansImage from "../../../public/Loans.svg";
import SegregatedImage from "../../../public/Segregated.svg";
import SegregatedWithoutAnimations from "../../../public/SegregatedWithoutAnimations.svg";
import DashboardWithOutAnimations from "../../../public/DashboardWithOutAnimations.svg";
import LensWithoutAnimations from "../../../public/LensWithoutAnimations.svg";

function Why() {
  return (
    <div className="bg-white" id="why">
      <div className="centered px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[152px]">
        <div className="text-start md:text-center text-greenDark mb-[63px] xl:mb-[250px] mt-[100px] xl:mt-[235px] hiddenShowUp">
          <div className="gradient-container md:text-greenDark mb-[16px]">
            <h1 className=" text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight xl:min-h-[137px] font-spectral">
              Why Choose <br className="block md:hidden" /> Olivetree?
            </h1>
          </div>
          <div className="max-w-[484px] xl:mx-auto">
            Earn a high fixed-rate yield on-chain without lockups or variability
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
                    The First ERC-4626 Fixed-Rate Yield Protocol.
                  </h1>
                }
                text={
                  <p className="text-greenDark ">
                    Olivetree brings you an attractive,
                    <span className="font-bold">fixed-rate yield backed </span>
                    by broadly-diversified RWA private credit. No more variable
                    yield positions that underperform over time, only
                    predictable yields that can be compounded with confidence.
                  </p>
                }
              />
            </div>
            <div className="hiddenShowRight lg:block hidden my-auto mx-auto">
              {" "}
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
                  <h1 className="text-4xl lg:text-7xl font-semibold tracking-tight lg:min-h-[237px] font-spectral">
                    DeFi Composable
                  </h1>
                }
                text={
                  <p className="text-greenDark">
                    Olivetree provides fixed yields for steady cashflow,
                    long-term returns and compounding.
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
                  <h1 className="text-4xl lg:text-7xl font-semibold tracking-tight lg:min-h-[237px] font-spectral text-nowrap">
                    Reliable.
                    <br /> Fixed Yields.
                    <br /> Automated Income.
                  </h1>
                }
                text={
                  <p className="text-greenDark  max-w-[500px]">
                    Olivetree supports all major stablecoins and is tailored to
                    work with DeFi yield-bearing strategies, providing users
                    with the best fixed-rate yield onchain.
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
