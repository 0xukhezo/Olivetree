// import Image from "next/image";
// import { Inter } from "next/font/google";

import Early from "@/components/sections/Early";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Next from "@/components/sections/Next";
import Roadmap from "@/components/sections/Roadmap";
import Why from "@/components/sections/Why";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
      <Why />
      <Early />
      <Roadmap />
      <Faq />
      <Next />
    </main>
  );
}
