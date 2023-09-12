// React
import React, { useEffect } from "react";
// Components
import Footer from "@/components/layout/Footer";
import Early from "@/components/sections/Early";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Next from "@/components/sections/Next";
import Roadmap from "@/components/sections/Roadmap";
import Why from "@/components/sections/Why";

export default function Home() {
  // const setScrollVar = () => {
  //   const htmlElement = document.documentElement;
  //   const percentOfSreenHeightScrolled =
  //     htmlElement.scrollTop / htmlElement.clientHeight;
  //   htmlElement.style.setProperty(
  //     "--scroll",
  //     Math.min(percentOfSreenHeightScrolled * 100, 100).toString()
  //   );
  // };

  const setScrollPadding = () => {
    const navigation = document.querySelector(".primary-navigation") as any;
    const navigationHeight = navigation.offsetHeight;
    document.documentElement.style.setProperty(
      "--scroll-padding",
      navigationHeight + "px"
    );
  };

  const getObserver = (type: string) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(type);
        }
      });
    });
    return observer;
  };

  const setScrollLeft = () => {
    const hiddenElementsLeft = document.querySelectorAll(
      ".hiddenShowLeft"
    ) as any;
    const hiddenElementsRight = document.querySelectorAll(
      ".hiddenShowRight"
    ) as any;
    const hiddenElementsRotate = document.querySelectorAll(
      ".hiddenShowUp"
    ) as any;
    const observer = getObserver("show");
    hiddenElementsLeft.forEach((el: any) => observer.observe(el));
    hiddenElementsRight.forEach((el: any) => observer.observe(el));
    const upObserver = getObserver("showUp");
    hiddenElementsRotate.forEach((el: any) => upObserver.observe(el));
  };

  useEffect(() => {
    setScrollPadding();
    setScrollLeft();

    // window.addEventListener("scroll", setScrollVar);
    // window.addEventListener("resize", setScrollVar);
    // setScrollVar();
  }, []);

  return (
    <main>
      <Hero />
      <Why />
      <Early />
      <Roadmap />
      <Faq />
      <Next />
      <Footer />
    </main>
  );
}
