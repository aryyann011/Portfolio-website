import { CometCard } from "@/components/ui/comet-card";
import { Github, Linkedin, Twitter, MapPin, Mail } from "lucide-react";
import Link from "next/link";

export function IdentityCardDemo() {
  return (
    <div className="flex items-center justify-center py-20">
      <CometCard>
        <div
          className="relative flex w-80 flex-col items-center justify-center overflow-hidden rounded-[20px] border p-6 transition-colors duration-300 md:w-96
                     bg-white border-zinc-200 hover:bg-zinc-50
                     dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800/80"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* 1. Circular Profile Image Section */}
          <div className="relative mt-4 h-32 w-32 shrink-0 overflow-hidden rounded-full border-4 shadow-xl border-white dark:border-zinc-950">
            <img
              loading="lazy"
              src="/Aryans.png"
              alt="Profile"
              className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-110"
            />
          </div>

          {/* 2. Identity Info */}
          <div className="mt-6 flex flex-col items-center text-center">
            <h1 className="font-mono text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Aryan Mishra
            </h1>
            <p className="mt-1 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Full Stack Developer
            </p>
            
            {/* Location Tag */}
            <div className="mt-2 flex items-center gap-1 rounded-full px-3 py-1 text-xs backdrop-blur-sm bg-zinc-100 text-zinc-600 dark:bg-zinc-800/50 dark:text-zinc-500">
              <MapPin className="h-3 w-3" />
              <span>Salt Lake, Kolkata</span>
            </div>
          </div>

          {/* 3. Divider */}
          <div className="my-6 h-px w-full bg-gradient-to-r from-transparent via-zinc-200 to-transparent dark:via-zinc-700" />

          {/* 4. Social Links */}
          <div className="flex w-full items-center justify-center gap-6">
            <SocialLink href="https://github.com/jhajyotish821" icon={<Github className="h-5 w-5" />} label="GitHub" />
            <SocialLink href="https://twitter.com" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
            <SocialLink href="https://linkedin.com" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
            <SocialLink href="mailto:alex@example.com" icon={<Mail className="h-5 w-5" />} label="Email" />
          </div>

          {/* Optional: ID Number or Footer */}
          <div className="mt-8 flex w-full justify-between text-[10px] font-mono uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
             <span>ID: 8829-XJ</span>
             <span>EXP: 2028</span>
          </div>

          {/* Glossy Overlay Effect (Optional Aesthetic) */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t opacity-50 rounded-[20px] from-white/50 dark:from-zinc-950/50 to-transparent" />
        </div>
      </CometCard>
    </div>
  );
}

// Helper Component for Social Links
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      className="group relative flex items-center justify-center transition-colors text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
    >
      <span className="relative z-10 transition-transform duration-200 group-hover:-translate-y-1">
        {icon}
      </span>
      {/* Tooltip */}
      <span className="absolute -bottom-6 opacity-0 transition-opacity duration-200 group-hover:opacity-100 text-[10px] text-zinc-400 dark:text-zinc-500">
        {label}
      </span>
    </Link>
  );
}