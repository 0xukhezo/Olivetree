import React from "react";
import Image from "next/image";
import TreeImage from "../../../public/Tree.svg";
import Segregated from "../../../public/Segregated.svg";
import Lens from "../../../public/Lens.svg";
import Loans from "../../../public/Loans.svg";
import Paragraphs from "../Paragraphs/Paragraphs";

function Why() {
  return (
    <main
      className="px-[20px] sm:px-[30px] md:px-[60px] lg:px-[100px] xl:px-[152px] bg-white"
      id="why"
    >
      <div className="text-center text-greenDark mb-[250px] mt-[135px]">
        <h1>Why Choose Olivetree?</h1>
        <div className="grid grid-cols-2 mt-[48px] gap-x-[16px]">
          <div>
            <h2>For Borrowers</h2>
            <p>
              Receive one loan against any or all of your on-chain assets. No
              forced liquidations and repay at any time with structures unique
              to you.
            </p>
          </div>
          <div>
            <h2>For Lenders</h2>
            <p>
              Earn attractive fixed-rate returns for your stablecoins. Access
              yield from any asset class with sustainable on-chain returns.
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2">
          <Paragraphs
            title={
              <h1 className="text-7xl font-semibold tracking-tight min-h-[237px]">
                Segregated Risk Arranged directly between borrowers & lenders.
              </h1>
            }
            text={
              <p className="text-greenDark">
                When you finance with Olivertree, there are{" "}
                <span className="font-bold">no oracle dependencies </span>
                and you don’t share peer-to-pool risks. Olivetree loans are
                trustless, arranged directly between the borrower and lenders;
                risks are isolated and your assets are protected from forced
                liquidations.
              </p>
            }
          />

          <Image
            src={Segregated.src}
            alt="Your Company"
            width={578}
            height={454}
            className="pulse-element"
          />
        </div>

        <div className="grid grid-cols-2 my-[124px]">
          <Image
            src={Loans.src}
            alt="Your Company"
            width={615}
            height={480}
            className="pulse-element"
          />
          <Paragraphs
            title={
              <h1 className="text-7xl font-semibold tracking-tight min-h-[237px]">
                Financing Flexibility. Loans Unique to You.
              </h1>
            }
            text={
              <p className="text-greenDark">
                Borrows and lenders are dynamically matched, with optimally
                tailored terms for each loan. Credit that borrowers couldn’t
                find anywhere else, Olivetree provides loans unique to you and
                your assets.
              </p>
            }
          />
        </div>
        <div className="grid grid-cols-2">
          <Paragraphs
            title={
              <h1 className="text-7xl font-semibold tracking-tight min-h-[237px]">
                Fast.
                <br /> Lending.
                <br /> Reformed.
              </h1>
            }
            text={
              <p className="text-greenDark">
                Olivetree supports any combination of arbitrary assets.
                Borrowers can add leverage without fear of forced liquidations,
                with loans that can be repaid at any time. Lenders gain access
                to a new type of marketplace to deploy stablecoins at
                attractive, fixed yields.
              </p>
            }
          />

          <Image
            src={Lens.src}
            alt="Your Company"
            width={565}
            height={480}
            className="pulse-element"
          />
        </div>
      </div>
    </main>
  );
}

export default Why;
