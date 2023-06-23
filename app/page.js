import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Services from "./services";
import Calltoaction from "./calltoaction";
import Contact from "./contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="flex flex-col gap-16 pb-16">
        <Services />
        <Calltoaction />
        <Contact />
      </main>
    </>
  );
}
