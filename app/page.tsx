import { IdentityCardDemo } from "@/components/Card";
import { GithubGraph } from "@/components/GithubGraph";
import { Herosection } from "@/components/HeroSection";
import { ProjectCard, ProjectsSection } from "@/components/ProjectCard";
import { TechMarquee } from "@/components/TechMarquee";
import Image from "next/image";
import { GitHubCalendar } from "react-github-calendar"

export default function Home() {
  return (
    <div className="relative flex flex-col gap-16 items-center px-4">
      <div className="w-full sm:w-4/5 md:w-3/4 lg:w-3/5">
        <Herosection/>
      </div>
      <div className="w-full sm:w-4/5 md:w-3/4 lg:w-3/5">
        <TechMarquee/>
      </div>
      <div className="w-full sm:w-4/5 md:w-3/4 lg:w-3/5">
        <p className="text-white text-2xl font-semibold font-satisfy mb-2">Github Contributions</p>
        <GithubGraph/>
      </div>
      <div className="w-full sm:w-4/5 md:w-3/4 lg:w-3/5">
        <ProjectsSection/>
      </div>
      {/* Minimal Conclusion Section */}
      <div className="w-full sm:w-4/5 md:w-3/4 lg:w-3/5 mt-12 mb-8 flex flex-col items-center justify-center gap-6 border-t border-zinc-800 pt-8">
        
        {/* Call to Actions */}
        <div className="flex gap-4">
          <a href="/resume.pdf" target="_blank" className="px-6 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-zinc-200 transition-colors">
            Download Resume
          </a>
          <a href="https://buymeacoffee.com/yourlink" target="_blank" className="px-6 py-2 bg-zinc-800 text-white text-sm font-semibold rounded-full border border-zinc-700 hover:bg-zinc-700 transition-colors">
            ☕ Buy me a coffee
          </a>
        </div>

        {/* Simple Text Footer */}
        <p className="text-zinc-500 text-xs mt-4">
          © {new Date().getFullYear()} Aryan Mishra. Built with Next.js & Tailwind.
        </p>
      </div>
    </div>
  );
}
