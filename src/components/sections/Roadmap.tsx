import Image from "next/image";
import React from "react";
import RoadmapTree from "../../../public/RoadmapTree.svg";

export default function Roadmap() {
  return (
    <div className="bg-greenDark py-[77px] text-center" id="roadmap">
      <div
        className="bg-cover bg-center flex items-center justify-center flex-col max-w-[739px] h-[739px] mx-auto"
        style={{ backgroundImage: `url('${RoadmapTree.src}')` }}
      >
        <div className="flex justify-center items-center min-h-[90px] w-screen relative">
          <div className="flex items-center justify-between gap-x-[350px] z-50">
            <div className="bg-white p-[20px] rounded-full min-w-[90px] min-h-[90px] flex justify-center items-center">
              01
            </div>
            <div className="bg-white p-[20px] rounded-full min-w-[90px] min-h-[90px] flex justify-center items-center">
              02
            </div>
            <div className="bg-white p-[20px] rounded-full min-w-[90px] min-h-[90px] flex justify-center items-center">
              03
            </div>
          </div>
          <div className="absolute w-full h-[0.5px]">
            <div className="h-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
          </div>{" "}
        </div>
        <div className="flex justify-center items-center min-h-[90px] w-screen relative">
          <div className="flex items-center justify-between gap-x-[40px] z-50 text-white">
            <div className="p-[20px] flex justify-center items-center flex-col">
              <h1>Originations</h1>
              <p className="max-w-[365px] mt-[15px]">
                Borrow against any on-chain assets, at hyper-efficient fixed
                rates, while protected from forced liquidations
              </p>
            </div>
            <div className="p-[20px] flex justify-center items-center flex-col">
              <h1>Originations</h1>
              <p className="max-w-[365px] mt-[15px]">
                Borrow against any on-chain assets, at hyper-efficient fixed
                rates, while protected from forced liquidations
              </p>
            </div>
            <div className="p-[20px] flex justify-center items-center flex-col">
              <h1>Originations</h1>
              <p className="max-w-[365px] mt-[15px]">
                Borrow against any on-chain assets, at hyper-efficient fixed
                rates, while protected from forced liquidations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
