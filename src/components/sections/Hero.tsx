import React from "react";
import Navbar from "../layout/Navbar";
import Image from "next/image";
import TreeImage from "../../../public/Tree.svg";
import TreeResponsive from "../../../public/TreeResponsive.svg";
import Paragraphs from "../Paragraphs/Paragraphs";

function Hero() {
  return (
    <div className="bg-neutral0 xl:py-[88px] px-[20px] sm:px-[30px] md:px-[60px] lg:px-[100px] xl:px-[152px]">
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="mt-[52px] xl:mt-[196px] lg:max-w-[476px] xl:max-w-[625px]">
          <Paragraphs
            title={
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-semibold tracking-tight lg:min-h-[237px]">
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
        <div className="w-full mt-[70px] xl:mt-[191px] items-center flex">
          <Image
            src={TreeImage.src}
            alt="Your Company"
            width={821}
            height={406}
            className="pulse-element lg:block hidden ml-10 xl:ml-20"
          />
          <Image
            src={TreeResponsive.src}
            alt="Your Company"
            width={527}
            height={241}
            className="block lg:hidden mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
