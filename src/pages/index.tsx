// import Image from "next/image";
// import { Inter } from "next/font/google";

import Hero from "@/components/sections/Hero";
import Why from "@/components/sections/Why";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Hero />
      <Why />
    </main>
  );
}
