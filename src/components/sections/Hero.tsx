// React
import React, { useEffect, useState } from "react";
// Components
import Navbar from "../layout/Navbar";
import DesktopTree from "../imagesSvg/DesktopTree";
import DesktopTreeMobile from "../imagesSvg/DesktopTreeMobile";
import Paragraph from "../containers/Paragraph";

function Hero() {
  const [gapX, setGapX] = useState(108);

  const displayMargin = () => {
    const htmlElementWidth = document.documentElement.clientWidth;
    const gap = htmlElementWidth - 1590;

    if (gap < 0) {
      setGapX(100);
    } else {
      setGapX(gap);
    }
    if (gap > 400) {
      setGapX(400);
    }

    if (document.documentElement.clientWidth <= 1024) {
      setGapX(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", displayMargin);
    window.addEventListener("resize", displayMargin);
    displayMargin();
  }, []);

  return (
    <div className="bg-neutral0 xl:py-[36px] ">
      <div className="centered px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[152px]">
        <Navbar />
        <div
          className="flex flex-col lg:flex-row justify-between"
          style={{ gap: `${gapX}px` }}
        >
          <div className="hiddenShowLeft mt-[52px] xl:mt-[196px] treeDesktop:min-w-[376px] xl:min-w-[475px] 2xl:min-w-[625px]">
            <Paragraph
              title={
                <div>
                  <h1 className="text-3xl md:text-4xl xl:text-5xl font-semibold tracking-tight font-spectral">
                    Enabling Perpetual Income
                  </h1>
                </div>
              }
              text={
                <p className="text-greenDark text-lg">
                  Dollar savings products with a fixed-rate perpetuity
                </p>
              }
            />
            <a href="https://x.com/olivetreeyield" target="_blank">
              <button className="btn p-5 rounded-lg mt-[32px] sm:min-w-[300px] min-w-[180px]">
                Join our X
              </button>
            </a>
          </div>
          <div className="treeAnimation w-full mt-[70px] xl:mt-[191px] items-center flex">
            <div className="lg:block hidden ">
              <DesktopTree />
            </div>
            <div className="block lg:hidden mx-auto relative left-[-50px]">
              <DesktopTreeMobile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
