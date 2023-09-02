// import Image from "next/image";
// import { Inter } from "next/font/google";

import Early from "@/components/sections/Early";
import Hero from "@/components/sections/Hero";
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
    </main>
  );
}
