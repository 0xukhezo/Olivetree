// React
import React from "react";

export default function Faq() {
  return (
    <div
      className="text-center px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[152px] mb-[57px]"
      id="faq"
    >
      {" "}
      <div className="centered">
        <h1 className="mt-[104px] mb-[80px] text-5xl font-semibold tracking-wide font-spectral text-greenDark hiddenShowUp">
          Common questions & answers
        </h1>
        <div className="grid lg:grid-cols-2 gap-x-[50px] justify-items-center text-start">
          <div className="border-b-1 border-neutral3 max-w-[505px] hiddenShowUp">
            <h2 className="text-greenDark font-semibold">
              Why should I lend capital on Olivetree?
            </h2>
            <p className="mt-[24px] mb-[42px] text-neutral6">
              Sophisticated lenders gain wider access to investment
              opportunities, enhancing their deal flow and potential for capital
              deployment. Individual professionals or retail investors gain
              access to high-yield credit deals that have not been widely
              available in the past.
              <br /> Traditional banks moving further away from taking credit
              risk creates space in the market for private capital to benefit
              from these attractive investments.
            </p>
          </div>
          <div className="border-b-1 border-neutral3 max-w-[505px] mb-[41px] lg:my-[41px] hiddenShowUp">
            <h2 className="text-greenDark font-semibold">
              What will my returns look like? Are yields volatile?
            </h2>
            <p className="mt-[24px] mb-[42px] text-neutral6">
              Olivetree expects lenders on the platform to sustainably earn
              between 10 - 25+% fixed-interest APRs. Loans are funded and repaid
              in stablecoins.
            </p>
          </div>
          <div className="lg:border-b-0 border-b-1 border-neutral3 max-w-[505px] mb-[41px] hiddenShowUp">
            <h2 className="text-greenDark font-semibold">
              Why is it safer to have no reliance on oracles?
            </h2>
            <p className="mt-[24px] mb-[42px] text-neutral6">
              As soon as any external reliance is introduced to a contract, it
              becomes less resilient as it takes on the liability of dependency.
              Oracles introduce external data and thus an exploitable
              vulnerability.
            </p>
          </div>{" "}
          <div className="max-w-[505px] hiddenShowUp">
            <h2 className="text-greenDark font-semibold">
              If I am invested in an active loan, can I withdraw my capital
              before the loan matures?
            </h2>
            <p className="mt-[24px] mb-[42px] text-neutral6">
              Yes, any lender may exit their position(s) prior to maturity.
              Using Olivetree's Secondaries Marketplace lenders can
              review/acquire/sell down any credit position.
            </p>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
