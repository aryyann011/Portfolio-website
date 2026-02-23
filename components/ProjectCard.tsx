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
      className="relative group rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/8"
      style={{ boxShadow: hovered ? "0 0 40px rgba(255,255,255,0.05)" : "none" }}
    >
      <div className="relative h-64 overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-900">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-zinc-700/40 to-zinc-900/80 flex items-center justify-center">
            <span className="text-6xl font-bold text-white/5 select-none">{title[0]}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
      </div>

      <div className="p-5 flex flex-col gap-3">
        <h3 className="text-white font-semibold text-lg leading-tight">{title}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 mt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="border-t border-white/10 mt-2" />

        <div className="flex items-center gap-3 pt-1">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
          >
            <Github size={15} />
            <span>Source</span>
          </a>

          <div className="w-px h-4 bg-white/10" />

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200"
          >
            <ExternalLink size={15} />
            <span>Live Preview</span>
          </a>

          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center justify-center w-8 h-8 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-200"
          >
            <ArrowUpRight size={15} className="text-white/60" />
          </a>
        </div>
      </div>
    </div>
  )
}



const projects = [
  {
    title: "WorkBench Studio",
    description: "A brief description of what this project does and the problem it solves.",
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
      <p className="text-white text-2xl font-semibold font-satisfy mb-6">Projects</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  )
}
