import Footer from "@/components/layout/Footer";
import Early from "@/components/sections/Early";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Next from "@/components/sections/Next";
import Roadmap from "@/components/sections/Roadmap";
import Why from "@/components/sections/Why";
import { useEffect } from "react";

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
  const getObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    return observer;
  };

  const setScrollLeft = () => {
    const hiddenElements = document.querySelectorAll(".hiddenShowLeft") as any;
    const observer = getObserver();
    hiddenElements.forEach((el: any) => observer.observe(el));
  };

  const setScrollRight = () => {
    const hiddenElements = document.querySelectorAll(".hiddenShowRight") as any;
    const observer = getObserver();
    hiddenElements.forEach((el: any) => observer.observe(el));
  };

  useEffect(() => {
    setScrollPadding();
    setScrollLeft();
    setScrollRight();
    // window.addEventListener("scroll", setScrollVar);
    // window.addEventListener("resize", setScrollVar);
    // setScrollVar();
  }, []);

  return (
    <main className="centered">
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
