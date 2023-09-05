import Footer from "@/components/layout/Footer";
import Early from "@/components/sections/Early";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Next from "@/components/sections/Next";
import Roadmap from "@/components/sections/Roadmap";
import Why from "@/components/sections/Why";

export default function Home() {
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
