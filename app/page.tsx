import { IdentityCardDemo } from "@/components/Card";
import { Herosection } from "@/components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex justify-center">
      <div className="w-3/5">
        <Herosection/>
      </div>
    </div>
  );
}
