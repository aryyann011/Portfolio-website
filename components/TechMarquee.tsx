"use client"

import React from "react";

const tools = [
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
  { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/5FA04E" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/DD2C00" },
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "Solidity", icon: "https://cdn.simpleicons.org/solidity/ffffff" },
];

const tools2 = [
  { name: "Express", icon: "https://cdn.simpleicons.org/express/ffffff" },
  { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
  { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx/009639" },
  { name: "Flask", icon: "https://cdn.simpleicons.org/flask/ffffff" },
  { name: "Keras", icon: "https://cdn.simpleicons.org/keras/D00000" },
  { name: "Bun", icon: "https://cdn.simpleicons.org/bun/ffffff" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "Redis", icon: "https://cdn.simpleicons.org/redis/FF4438" },
  { name: "GraphQL", icon: "https://cdn.simpleicons.org/graphql/E10098" },
];

function Badge({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-200 cursor-default select-none shrink-0">
      <img src={icon} alt={name} width={18} height={18} className="object-contain" />
      <span className="text-sm text-white/80 font-medium whitespace-nowrap">{name}</span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false }: { items: typeof tools; reverse?: boolean }) {
  const doubled = [...items, ...items]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex gap-3"
        style={{
          animation: `marquee${reverse ? "-reverse" : ""} 30s linear infinite`,
          width: "max-content",
        }}
      >
        {doubled.map((tool, i) => (
          <Badge key={`${tool.name}-${i}`} name={tool.name} icon={tool.icon} />
        ))}
      </div>
    </div>
  );
}

export function TechMarquee() {
  return (
    <div className="w-full py-6 flex flex-col gap-5">
      <p className="text-white text-2xl font-semibold font-satisfy mb-2">Tools that I know</p>

      {/* fade edges */}
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-black to-transparent" />

        <div className="flex flex-col gap-3">
          <MarqueeRow items={tools} />
          <MarqueeRow items={tools2} reverse />
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
