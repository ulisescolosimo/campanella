import Image from "next/image";
import PoliteamaInfo from "../components/PoliteamaInfo";
import Programa2025 from "../components/Programa2025";
import MembresiaPlanes from "@/components/MembresiaPlanes";
import MembresiaHero from "@/components/MembresiaHero";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <PoliteamaInfo />
      <MembresiaPlanes />
      <MembresiaHero />
    </>
  );
}
