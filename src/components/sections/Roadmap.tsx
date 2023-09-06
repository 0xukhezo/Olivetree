import React, { useEffect, useRef, useState } from "react";
import RoadmapTree from "../../../public/RoadmapTree.svg";

export default function Roadmap() {
  const divRef = useRef<any>(null);
  const [width, setWidth] = useState(1000);
  const [widthSteps, setWidthSteps] = useState(0);

  const setScrollVar = () => {
    const htmlElement = document.documentElement;
    setWidth(htmlElement.clientWidth);
  };

  const setSteps = () => {
    const firstStep = document.getElementById("firstStep") as any;
    const secondStep = document.getElementById("secondStep") as any;
    const thirdStep = document.getElementById("thirdStep") as any;
    const htmlElement = document.documentElement;
    const hiddenElements = document.querySelectorAll(".hiddenStep") as any;

    setWidthSteps(firstStep?.getBoundingClientRect().right - 20);
    setTimeout(() => {
      hiddenElements[0].classList.add("showStep");
    }, 2000);
    setTimeout(() => {
      setWidthSteps(secondStep?.getBoundingClientRect().right - 20);
      setTimeout(() => {
        hiddenElements[1].classList.add("showStep");
      }, 2000);
    }, 5000);
    setTimeout(() => {
      setWidthSteps(thirdStep?.getBoundingClientRect().right - 20);
      setTimeout(() => {
        hiddenElements[2].classList.add("showStep");
      }, 2000);
    }, 10000);
    setTimeout(() => {
      setWidthSteps(htmlElement.clientWidth);
    }, 14000);
  };

  useEffect(() => {
    window.addEventListener("scroll", setScrollVar);
    window.addEventListener("resize", setScrollVar);
    setScrollVar();
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          if (divRef.current.classList.contains("show")) {
            setSteps();
          }
        }
      }
    });

    if (divRef.current) {
      observer.observe(divRef.current, { attributes: true });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-greenDark text-center pb-[172px] text-white">
      <div className="hiddenShowRight pt-[77px] mb-10 md:mb-0" ref={divRef}>
        <h1 className="text-5xl md:text-6xl xl:text-7xl font-semibold tracking-wide font-spectral">
          Roadmap
        </h1>
        <p className="max-w-[450px] mx-auto mt-[16px]">
          We are in the early stages of a seminal evolution in credit, bringing
          superior financing solutions to lenders and borrowers.
        </p>
      </div>
      <div id="roadmap">
        <div
          className="bg-cover bg-center flex items-center justify-center flex-col max-w-[739px] h-[739px] mx-auto mt-[-100px]"
          style={{ backgroundImage: `url('${RoadmapTree.src}')` }}
        >
          <div
            className={`flex justify-center items-center min-h-[90px] relative`}
            style={{ width: `${width}px` }}
          >
            <div className="grid md:grid-cols-3 z-40 mt-[170px] roadmap:mt-[148px] lg:mt-[145px]">
              <div className="hiddenStep">
                <div
                  id="firstStep"
                  className="bg-white p-[20px] rounded-full max-w-[90px] min-h-[90px] flex justify-center items-center mx-auto text-neutral5 text-4xl"
                >
                  01
                </div>
                <div className="p-[20px] flex justify-center items-center flex-col">
                  <h1 className="font-spectral font-bold text-lg">
                    Originations
                  </h1>
                  <p className="max-w-[365px] mt-[15px]">
                    Borrow against any on-chain assets, at hyper-efficient fixed
                    rates, while protected from forced liquidations
                  </p>
                </div>
              </div>{" "}
              <div className="hiddenStep">
                <div
                  id="secondStep"
                  className="bg-white p-[20px] rounded-full max-w-[90px] min-h-[90px] flex justify-center items-center mx-auto text-neutral5 text-4xl"
                >
                  02
                </div>
                <div className="p-[20px] flex justify-center items-center flex-col">
                  <h1 className="font-spectral font-bold text-lg">
                    Secondaries Marketplace
                  </h1>
                  <p className="max-w-[365px] mt-[15px]">
                    For participants (or strategies) that require rapid entering
                    and exiting positions to farm yields
                  </p>
                </div>
              </div>{" "}
              <div className="hiddenStep">
                <div
                  id="thirdStep"
                  className="bg-white p-[20px] rounded-full max-w-[90px] min-h-[90px] flex justify-center items-center mx-auto text-neutral5 text-4xl"
                >
                  03
                </div>
                <div className="p-[20px] flex justify-center items-center flex-col">
                  <h1 className="font-spectral  font-bold text-lg">
                    Credit Protection
                  </h1>
                  <p className="max-w-[365px] mt-[15px]">
                    Market participants can hedge against the creditworthiness
                    of any debt instrument on Olivetree
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`grow-line absolute md:h-[1px] left-0`}
              style={{ width: `${widthSteps}px` }}
            >
              <div className="h-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
