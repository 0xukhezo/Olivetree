// React
import React, { useEffect, useRef, useState } from "react";
// Images
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
    const hiddenElementsText = document.querySelectorAll(
      ".hiddenStepText"
    ) as any;

    const line = document.getElementById("line") as any;

    setWidthSteps(firstStep?.getBoundingClientRect().right - 20);
    if (hiddenElements[2].classList.contains("showStep")) {
      setWidthSteps(htmlElement.clientWidth);
      line.classList.remove("grow-line");
    } else {
      setTimeout(() => {
        hiddenElements[0].classList.add("showStep");
        hiddenElementsText[0].classList.add("bigStep");
      }, 800);
      setTimeout(() => {
        setWidthSteps(secondStep?.getBoundingClientRect().right - 20);
        setTimeout(() => {
          hiddenElementsText[0].classList.remove("bigStep");
          hiddenElements[1].classList.add("showStep");
          hiddenElementsText[1].classList.add("bigStep");
        }, 800);
      }, 1800);
      setTimeout(() => {
        setWidthSteps(thirdStep?.getBoundingClientRect().right - 20);
        setTimeout(() => {
          hiddenElementsText[1].classList.remove("bigStep");
          hiddenElements[2].classList.add("showStep");
          hiddenElementsText[2].classList.add("bigStep");
        }, 800);
      }, 3600);
      setTimeout(() => {
        setWidthSteps(htmlElement.clientWidth);
        hiddenElementsText[2].classList.remove("bigStep");
      }, 5400);
    }
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
          if (divRef.current.classList.contains("showUp")) {
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
    <div className="bg-greenDark text-center text-white ">
      <div className="centered pb-[172px] ">
        <div
          className="hiddenShowUp pt-[77px] mb-10 md:mb-0 px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[152px]"
          ref={divRef}
        >
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-semibold tracking-wide font-spectral">
            The Problems
          </h1>
          <p className="text-greenDark text-xl">
            Current Financial Instruments for Stablecoins Disappoint
          </p>
        </div>
        <div id="roadmap" className="mt-20 md:mt-0">
          <div
            className="bg-cover bg-center flex items-center justify-center flex-col max-w-[739px] h-[739px] mx-auto mt-[-100px]"
            style={{ backgroundImage: `url('${RoadmapTree.src}')` }}
          >
            <div
              className={`flex justify-center items-center min-h-[90px] relative px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[152px]`}
              style={{ width: `${width}px` }}
            >
              <div className="grid md:grid-cols-3 z-40 mt-[160px] roadmap:mt-[155px] lg:mt-[170px] xl:mt-[130px] 2xl:mt-[140px] opacity-100">
                <div className="hiddenStep">
                  <div
                    id="firstStep"
                    className="bg-white p-[20px] rounded-full max-w-[90px] min-h-[90px] flex justify-center items-center mx-auto text-neutral5 text-4xl"
                  >
                    01
                  </div>
                  <div className="hiddenStepText p-[20px] flex justify-center items-center flex-col">
                    <h1 className="font-spectral font-bold text-2xl tracking-wider">
                      Limited Selection
                    </h1>
                    <p className="max-w-[365px] mt-[15px] lg:text-xl">
                      Products lack meaningful risk differentiation
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
                  <div className="hiddenStepText p-[20px] flex justify-center items-center flex-col">
                    <h1 className="font-spectral font-bold text-2xl tracking-wider">
                      Return Reflexivity
                    </h1>
                    <p className="max-w-[365px] mt-[15px] lg:text-xl">
                      Volatile, variable returns
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
                  <div className="hiddenStepText p-[20px] flex justify-center items-center flex-col">
                    <h1 className="font-spectral  font-bold text-2xl tracking-wider">
                      Unpredictable
                    </h1>
                    <p className="max-w-[365px] mt-[15px] lg:text-xl">
                      Confusing risk and return profiles Are not suitable for
                      long-term allocations
                    </p>
                  </div>
                </div>
              </div>
              <div
                id="line"
                className={`grow-line absolute md:h-[1px] left-0 `}
                style={{ width: `${widthSteps}px` }}
              >
                <div className="h-full bg-gradient-to-r from-transparent via-white to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
