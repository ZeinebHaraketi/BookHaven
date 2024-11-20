import Hero from "@/components/Hero";
import Events from "./event/page";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <main>
      <Hero />
      <Events />
      <Carousel />
    </main>
  );
}