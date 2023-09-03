import React from "react";

export default function Faq() {
  return (
    <div className="text-center px-[20px] sm:px-[30px] md:px-[60px] lg:px-[100px] xl:px-[152px] mb-[57px]">
      <h1 className="mt-[104px] mb-[80px]">Common questions & answers</h1>
      <div className="grid grid-cols-2 justify-items-center text-start">
        <div className="border-b-1 border-neutral3 max-w-[505px]">
          <h2>
            How does taking out a loan on Olivetree compare to Aave or Compound?
          </h2>
          <p className="mt-[24px] mb-[42px]">
            Peer-to-Pool (or Peer-to-Contract) protocols such as Aave or
            Compound are attractive for specific approved collateral types (ETH,
            CRV, etc.) and strategies such as flash loans.
            <br />
            Olivetree enables borrowers to finance any combination of arbitrary
            assets within a single financing, at a predictable fixed-rate. There
            are no forced-liquidations and borrowers may repay the position at
            any time.
          </p>
        </div>
        <div className="border-b-1 border-neutral3 max-w-[505px]">
          <h2>Why should I lend capital on Olivetree?</h2>
          <p className="mt-[24px] mb-[42px]">
            Sophisticated lenders gain wider access to investment opportunities,
            enhancing their deal flow and potential for capital deployment.
            Individual professionals or retail investors gain access to
            high-yield credit deals that have not been widely available in the
            past.
            <br /> Traditional banks moving further away from taking credit risk
            creates space in the market for private capital to benefit from
            these attractive investments.
          </p>
        </div>
        <div className="border-b-1 border-neutral3 max-w-[505px] my-[41px]">
          <h2>How am I protected from forced liquidations?</h2>
          <p className="mt-[24px] mb-[42px]">
            Peer-to-Syndicate loans on Olivetree are isolated debt structures
            where the lender(s) take on the credit risk. This has the combined
            benefits of allowing for unique loan structures and terms, while
            also avoiding the major risks of Peer-to-Pool models, such as
            cascading liquidations and oracle accuracy.
          </p>
        </div>
        <div className="border-b-1 border-neutral3 max-w-[505px] my-[41px]">
          <h2>What will my returns look like? Are yields volatile?</h2>
          <p className="mt-[24px] mb-[42px]">
            Olivetree expects lenders on the platform to sustainably earn
            between 10 - 25+% fixed-interest APRs. Loans are funded and repaid
            in stablecoins.
          </p>
        </div>
        <div className="max-w-[505px]">
          <h2>Why is it safer to have no reliance on oracles?</h2>
          <p className="mt-[24px] mb-[42px]">
            As soon as any external reliance is introduced to a contract, it
            becomes less resilient as it takes on the liability of dependency.
            Oracles introduce external data and thus an exploitable
            vulnerability.
          </p>
        </div>{" "}
        <div className="max-w-[505px]">
          <h2>
            If I am invested in an active loan, can I withdraw my capital before
            the loan matures?
          </h2>
          <p className="mt-[24px] mb-[42px]">
            Yes, any lender may exit their position(s) prior to maturity. Using
            Olivetree's Secondaries Marketplace lenders can review/acquire/sell
            down any credit position.
          </p>
        </div>
      </div>
    </div>
  );
}
