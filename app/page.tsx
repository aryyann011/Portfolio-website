import { IdentityCardDemo } from "@/components/Card";
import { Herosection } from "@/components/HeroSection";
import { TechMarquee } from "@/components/TechMarquee";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center">
      <div className="w-3/5 ">
        <Herosection/>
      </div>
      <div className="w-3/5">
        <TechMarquee/>
      </div>
    </div>
  );
}
