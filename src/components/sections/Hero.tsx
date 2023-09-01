import React from "react";
import Navbar from "../layout/Navbar";
import Image from "next/image";
import TreeImage from "../../../public/Tree.svg";
import Paragraphs from "../Paragraphs/Paragraphs";

function Hero() {
  return (
    <div className="bg-neutral0 py-[88px] px-[20px] sm:px-[30px] md:px-[60px] lg:px-[100px] xl:px-[152px]">
      <Navbar />
      <div className="flex flex-row justify-between">
        <div className="mt-[196px] max-w-[625px]">
          <Paragraphs
            title={
              <h1 className="text-7xl font-semibold tracking-tight min-h-[237px]">
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
        <div className="w-full mt-[191px]">
          <Image
            src={TreeImage.src}
            alt="Your Company"
            width={721}
            height={406}
            className="pulse-element"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
