import Footer from "@/components/layout/Footer";
import Early from "@/components/sections/Early";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Next from "@/components/sections/Next";
import Roadmap from "@/components/sections/Roadmap";
import Why from "@/components/sections/Why";
import { useEffect } from "react";

export default function Home() {
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
    const hiddenElementsLeft = document.querySelectorAll(
      ".hiddenShowLeft"
    ) as any;
    const hiddenElementsRight = document.querySelectorAll(
      ".hiddenShowRight"
    ) as any;
    const observer = getObserver();
    hiddenElementsLeft.forEach((el: any) => observer.observe(el));
    hiddenElementsRight.forEach((el: any) => observer.observe(el));
  };

  useEffect(() => {
    setScrollPadding();
    setScrollLeft();
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
