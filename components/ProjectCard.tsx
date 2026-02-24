"use client"

import { useState } from "react"
import { Github, ExternalLink, ArrowUpRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  githubUrl: string
  liveUrl: string
  image?: string
}

export function ProjectCard({ title, description, tags, githubUrl, liveUrl, image }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group rounded-xl border overflow-hidden transition-all duration-300 
                 bg-white border-zinc-200 shadow-sm hover:shadow-xl hover:border-zinc-300
                 dark:bg-white/5 dark:border-white/10 dark:backdrop-blur-sm dark:hover:bg-white/10 dark:hover:border-white/20 dark:shadow-none dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.05)]"
    >
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover opacity-90 dark:opacity-80 group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-zinc-200/50 to-zinc-300/80 dark:from-zinc-700/40 dark:to-zinc-900/80 flex items-center justify-center">
            <span className="text-6xl font-bold text-black/5 dark:text-white/5 select-none">{title[0]}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent dark:from-zinc-950" />
      </div>

      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-zinc-900 dark:text-white font-semibold text-lg leading-tight">{title}</h3>
        <p className="text-zinc-600 dark:text-white/50 text-sm leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 dark:bg-white/5 dark:border-white/10 dark:text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="border-t border-zinc-200 dark:border-white/10 mt-2" />

        <div className="flex items-center gap-3 pt-1">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:text-white/50 dark:hover:text-white transition-colors duration-200"
          >
            <Github size={15} />
            <span>Source</span>
          </a>

          <div className="w-px h-4 bg-zinc-200 dark:bg-white/10" />

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:text-white/50 dark:hover:text-white transition-colors duration-200"
          >
            <ExternalLink size={15} />
            <span>Live Preview</span>
          </a>

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center justify-center w-8 h-8 rounded-full border border-zinc-200 text-zinc-500 hover:border-zinc-300 hover:bg-zinc-50 dark:border-white/10 dark:text-white/60 dark:hover:border-white/30 dark:hover:bg-white/10 transition-all duration-200"
          >
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </div>
  )
}

const projects = [
  {
    title: "WorkBench Studio",
    description: "Workbench Studio is a high-performance, dual-engine environment designed to synchronize technical requirements and architectural visualization.",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    githubUrl: "https://github.com/aryyann011/Workbench-Studio",
    liveUrl: "",
    image: "/WorkBench.png", 
  },
  {
    title: "Xdemy",
    description: "Xdemy is a comprehensive Learning Management System (LMS) designed to simulate a real-world educational platform.",
    tags: ["React", "Supabase", "TailwindCSS"],
    githubUrl: "https://github.com/aryyann011/Xdemy",
    liveUrl: "https://xdemy.vercel.app/",
    image : "/Xdemy.png"
  },
  {
    title: "Nyaya Sahayak",
    description: "A Next-Gen Legal Tech Platform bridging the gap between Citizens, Legal Professionals, and Law Enforcement via AI & Real-time Data.",
    tags: ["React", "Supabase", "TailwindCSS", "GenAI"],
    githubUrl: "https://github.com/aryyann011/Nyayak",
    liveUrl: "https://nyayasahayak-zeta.vercel.app/",
    image : "/Nyayak.png"
  },
  {
    title: "Campus Connect",
    description: "Campus Connect is not just a directory — it’s a real-time, campus-exclusive social ecosystem built for university students to discover, connect, collaborate, and communicate securely.",
    tags: ["React", "Firebase", "TailwindCSS", "Python"],
    githubUrl: "https://github.com/aryyann011/Campus-Connect",
    liveUrl: "https://compussconnect.netlify.app/",
    image : "/CampusConnect.png"
  },
]

export function ProjectsSection() {
  return (
    <div className="w-full">
      <p className="text-zinc-900 dark:text-white text-2xl font-semibold font-satisfy mb-6">Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  )
}