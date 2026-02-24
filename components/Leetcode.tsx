"use client";

import { ArrowUpRight, Code2, Terminal } from "lucide-react";

const profiles = [
  {
    platform: "LeetCode",
    username: "sushimachine",
    link: "https://leetcode.com/jhajyotish821",
    icon: <Code2 size={20} className="text-zinc-600 dark:text-zinc-400" />,
    solved: "400+",
  },
  {
    platform: "GeeksforGeeks",
    username: "sushimachine",
    link: "https://auth.geeksforgeeks.org/user/jhajyotish",
    icon: <Terminal size={20} className="text-zinc-600 dark:text-zinc-400" />,
    solved: "100+",
  },
];

export function ProblemSolving() {
  return (
    <div className="w-full flex flex-col gap-4">
      <p className="text-zinc-900 dark:text-white text-2xl font-semibold font-satisfy">
        Algorithmic Prowess
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {profiles.map((p) => (
          <a
            key={p.platform}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-white/5 hover:bg-zinc-50 dark:hover:bg-white/10 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-lg bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
                {p.icon}
              </div>
              <div>
                <h3 className="font-semibold text-zinc-900 dark:text-white leading-none">
                  {p.platform}
                </h3>
                <p className="text-xs text-zinc-500 mt-1">@{p.username}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-zinc-900 dark:text-white">
              <div className="text-right">
                <p className="text-[10px] uppercase tracking-wider text-zinc-500">Solved</p>
                <p className="font-mono font-bold text-lg leading-none">{p.solved}</p>
              </div>
              <ArrowUpRight size={16} className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}