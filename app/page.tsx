import { IdentityCardDemo } from "@/components/Card";
import { GithubGraph } from "@/components/GithubGraph";
import { Herosection } from "@/components/HeroSection";
import { TechMarquee } from "@/components/TechMarquee";
import Image from "next/image";
import { GitHubCalendar } from "react-github-calendar"

export default function Home() {
  return (
    <div className="relative flex flex-col gap-8 items-center px-4">
      <div className="w-full sm:w-4/5 md:w-3/4 lg:w-3/5">
        <Herosection/>
      </div>
      <div className="w-full sm:w-4/5 md:w-3/4 lg:w-3/5 mb-6">
        <TechMarquee/>
      </div>
      <div className="w-full sm:w-4/5 md:w-3/4 lg:w-3/5">
        <p className="text-white text-2xl font-semibold font-satisfy mb-2">Github Contributions</p>
        <GithubGraph/>
      </div>
    </div>
  );
}
