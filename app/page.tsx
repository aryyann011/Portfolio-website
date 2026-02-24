import { IdentityCardDemo } from "@/components/Card";
import { FooterCTA } from "@/components/Footer";
import { GithubGraph } from "@/components/GithubGraph";
import { Herosection } from "@/components/HeroSection";
import { ProblemSolving } from "@/components/Leetcode";
import { ProjectCard, ProjectsSection } from "@/components/ProjectCard";
import { TechMarquee } from "@/components/TechMarquee";
import Image from "next/image";
import { GitHubCalendar } from "react-github-calendar"

export default function Home() {
  return (
    <div className="relative flex flex-col items-center px-4">
      <div className="w-full mb-10 sm:w-4/5 md:w-3/4 lg:w-3/5">
        <Herosection/>
      </div>
      <div className="w-full mb-16 sm:w-4/5 md:w-3/4 lg:w-3/5">
        <TechMarquee/>
      </div>
      <div className="w-full mb-16 sm:w-4/5 md:w-3/4 lg:w-3/5">
        <p className="text-white text-2xl font-semibold font-satisfy mb-2">Github Contributions</p>
        <GithubGraph/>
      </div>
      <div className="w-full mb-16 sm:w-4/5 md:w-3/4 lg:w-3/5">
        <ProjectsSection/>
      </div>
      <div className="w-full mb-4 sm:w-4/5 md:w-3/4 lg:w-3/5">
        <ProblemSolving />
      </div>
      <div className="w-full sm:w-4/5 md:w-3/4 lg:w-3/5">
        <FooterCTA />
      </div>
    </div>
  );
}
