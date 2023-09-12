// React
import React from "react";
// Next
import Image from "next/image";
// Components
import Paragraphs from "../Paragraphs/Paragraphs";
// Images
import Segregated from "../../../public/Segregated.svg";
import Lens from "../../../public/Lens.svg";
import Loans from "../../../public/Loans.svg";

function Why() {
  return (
    <div className=" bg-white" id="why">
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
                Receive one loan against any or all of your on-chain assets. No
                forced liquidations and repay at any time with structures unique
                to you.
              </p>
            </div>
            <div className="mt-[16px] md:mt-0">
              <h2 className="mb-[16px] text-greenDark text-lg font-semibold">
                For Lenders
              </h2>
              <p className="max-w-[484px] xl:mx-auto">
                Earn attractive fixed-rate returns for your stablecoins. Access
                yield from any asset class with sustainable on-chain returns.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="grid md:grid-cols-2">
            <Image
              src={Segregated.src}
              alt="Your Company"
              width={578}
              height={454}
              className="hiddenShowRight block md:hidden mb-[60px]"
            />
            <div className="hiddenShowLeft max-w-[500px]">
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
            <Image
              src={Segregated.src}
              alt="Your Company"
              width={578}
              height={454}
              className="hiddenShowRight md:block hidden my-auto mx-auto"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:my-[124px] items-center">
            <Image
              src={Loans.src}
              alt="Loans"
              width={615}
              height={480}
              className="hiddenShowLeft mb-[100px] lg:mb-0 my-auto mx-auto"
            />
            <div className="hiddenShowRight max-w-[500px]">
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
          <div className="grid md:grid-cols-2">
            <Image
              src={Lens.src}
              alt="Your Company"
              width={578}
              height={454}
              className="hiddenShowRight block md:hidden mb-[60px]"
            />{" "}
            <div className="hiddenShowLeft max-w-[500px]">
              <Paragraphs
                title={
                  <h1 className="text-4xl lg:text-7xl font-semibold tracking-tight lg:min-h-[237px]">
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
              className="hiddenShowRight md:block hidden my-auto mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
