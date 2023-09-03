import Image from "next/image";
import React from "react";
import RoadmapTree from "../../../public/RoadmapTree.svg";

export default function Roadmap() {
  return (
    <div
      className="bg-greenDark pt-[77px] text-center pb-[172px] text-white"
      id="roadmap"
    >
      <div
        className="bg-cover bg-center flex items-center justify-center flex-col max-w-[739px] h-[739px] mx-auto"
        style={{ backgroundImage: `url('${RoadmapTree.src}')` }}
      >
        <div className="flex justify-center items-center min-h-[90px] w-screen relative">
          <div className="grid md:grid-cols-3 z-40 mt-[170px] roadmap:mt-[148px] lg:mt-[145px]">
            <div>
              <div className="bg-white p-[20px] rounded-full max-w-[90px] min-h-[90px] flex justify-center items-center mx-auto text-neutral5 text-4xl">
                01
              </div>
              <div className="p-[20px] flex justify-center items-center flex-col">
                <h1>Originations</h1>
                <p className="max-w-[365px] mt-[15px]">
                  Borrow against any on-chain assets, at hyper-efficient fixed
                  rates, while protected from forced liquidations
                </p>
              </div>
            </div>{" "}
            <div>
              <div className="bg-white p-[20px] rounded-full max-w-[90px] min-h-[90px] flex justify-center items-center mx-auto text-neutral5 text-4xl">
                02
              </div>
              <div className="p-[20px] flex justify-center items-center flex-col">
                <h1>Secondaries Marketplace</h1>
                <p className="max-w-[365px] mt-[15px]">
                  For participants (or strategies) that require rapid entering
                  and exiting positions to farm yields
                </p>
              </div>
            </div>{" "}
            <div>
              <div className="bg-white p-[20px] rounded-full max-w-[90px] min-h-[90px] flex justify-center items-center mx-auto text-neutral5 text-4xl">
                03
              </div>
              <div className="p-[20px] flex justify-center items-center flex-col">
                <h1>Credit Protection</h1>
                <p className="max-w-[365px] mt-[15px]">
                  Market participants can hedge against the creditworthiness of
                  any debt instrument on Olivetree
                </p>
              </div>
            </div>
          </div>
          <div className="absolute w-full md:h-[1px]">
            <div className="h-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
