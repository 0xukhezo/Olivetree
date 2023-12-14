// React
import React from "react";
// Next
import Image from "next/image";
// Components
import Paragraphs from "../paragraphs/Paragraphs";
import Loans from "../images/Loans";
import Segreged from "../images/Segregated";
// Images
import Lens from "../../../public/Lens.svg";
import LoansImage from "../../../public/Loans.svg";
import SegregatedImage from "../../../public/Segregated.svg";

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
          <div className="grid md:grid-cols-2 mt-[48px] gap-x-[16px] ">
            <div>
              <h2 className="mb-[16px] text-greenDark text-lg font-semibold">
                For Borrowers
              </h2>
              <p className="max-w-[484px] xl:mx-auto">
                Olivetree is the first credit arrangement and syndication
                platform built specifically for DeFi, making offchain credit
                assets composable
              </p>
            </div>
            <div className="mt-[16px] md:mt-0">
              <h2 className="mb-[16px] text-greenDark text-lg font-semibold">
                For Lenders
              </h2>
              <p className="max-w-[484px] xl:mx-auto">
                Lenders (in any jurisdiction) can earn attractive fixed-rate
                returns on their stablecoins and access yields derived from the
                largest economic engines
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="grid lg:grid-cols-2 ">
            <Image
              src={SegregatedImage.src}
              alt="Your Company"
              width={578}
              height={454}
              className="hiddenShowRight block lg:hidden mx-auto mb-[60px]"
            />
            <div className="hiddenShowLeft max-w-[500px] mx-auto">
              <Paragraphs
                title={
                  <h1 className="text-4xl lg:text-7xl font-semibold tracking-tight lg:min-h-[237px] font-spectral ">
                    Segregated Risk Arranged directly between borrowers &
                    lenders.
                  </h1>
                }
                text={
                  <p className="text-greenDark ">
                    When you finance with Olivertree, there are{" "}
                    <span className="font-bold">no oracle dependencies </span>
                    and you don’t share peer-to-pool risks. Olivetree loans are
                    trustless, arranged directly between the borrower and
                    lenders; risks are isolated and your assets are protected
                    from forced liquidations.
                  </p>
                }
              />
            </div>
            <div className="hiddenShowRight lg:block hidden my-auto mx-auto">
              <Segreged />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 lg:my-[124px] items-center">
            <div className="hiddenShowLeft lg:block hidden mb-[100px] lg:mb-0 my-auto mx-auto">
              <Loans />
            </div>
            <Image
              src={LoansImage.src}
              alt="Your Company"
              width={578}
              height={454}
              className="hiddenShowRight block lg:hidden mx-auto mb-[60px]"
            />{" "}
            <div className="hiddenShowRight max-w-[500px] mx-auto">
              <Paragraphs
                title={
                  <h1 className="text-4xl lg:text-7xl font-semibold tracking-tight lg:min-h-[237px] font-spectral">
                    Financing Flexibility. Loans Unique to You.
                  </h1>
                }
                text={
                  <p className="text-greenDark">
                    Borrows and lenders are dynamically matched, with optimally
                    tailored terms for each loan. Credit that borrowers couldn’t
                    find anywhere else, Olivetree provides loans unique to you
                    and your assets.
                  </p>
                }
              />
            </div>
          </div>
          <div className="grid lg:grid-cols-2">
            <Image
              src={Lens.src}
              alt="Your Company"
              width={578}
              height={454}
              className="hiddenShowRight block lg:hidden mx-auto"
            />{" "}
            <div className="hiddenShowLeft max-w-[500px] mx-auto">
              <Paragraphs
                title={
                  <h1 className="text-4xl lg:text-7xl font-semibold tracking-tight lg:min-h-[237px] font-spectral">
                    Fast.
                    <br /> Lending.
                    <br /> Reformed.
                  </h1>
                }
                text={
                  <p className="text-greenDark">
                    Olivetree supports any combination of arbitrary assets.
                    Borrowers can add leverage without fear of forced
                    liquidations, with loans that can be repaid at any time.
                    Lenders gain access to a new type of marketplace to deploy
                    stablecoins at attractive, fixed yields.
                  </p>
                }
              />{" "}
            </div>
            <Image
              src={Lens.src}
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
