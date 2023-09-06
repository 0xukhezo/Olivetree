import React from "react";
import Navbar from "../layout/Navbar";
import Paragraphs from "../Paragraphs/Paragraphs";
import DesktopTree from "../Images/DesktopTree";
import DesktopTreeMobile from "../Images/DesktopTreeMobile";

function Hero() {
  return (
    <div className="bg-neutral0 xl:py-[36px] px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[152px]">
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="hiddenShowLeft mt-[52px] xl:mt-[196px] lg:max-w-[476px] xl:max-w-[625px]">
          <Paragraphs
            title={
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight lg:min-h-[237px] font-spectral">
                Flexible Peer-to-Syndicate Lending for All Digital Assets
              </h1>
            }
            text={
              <p className="text-greenDark">
                Olivetree is a generalized credit protocol to borrow against any
                combination of arbitrary assets, free from forced liquidations
                and oracle dependencies.
              </p>
            }
          />
          <button className="p-5 text-white bg-greenDark rounded-lg mt-[32px]">
            Join our Twitter
          </button>
        </div>
        <div className="hiddenShowRight w-full mt-[70px] xl:mt-[191px] items-center flex">
          <div className="treeWrapper lg:block hidden ml-10 xl:ml-20">
            <DesktopTree />
          </div>
          <div className="treeWrapper block lg:hidden mx-auto  relative left-[-50px]">
            <DesktopTreeMobile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
