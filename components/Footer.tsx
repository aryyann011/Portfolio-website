"use client"

import { Coffee, FileText, Send } from "lucide-react"
import { useState } from "react"
import { supabase } from "@/lib/supabase" // Adjust this path to where your client is

export function FooterCTA() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const { error: supabaseError } = await supabase
        .from('messages')
        .insert([
          { 
            name: formData.name, 
            email: formData.email, 
            message: formData.message 
          }
        ])

      if (supabaseError) throw supabaseError

      setFormData({ name: "", email: "", message: "" })
      setSubmitted(true)
      
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)

    } catch (err: any) {
      console.error("Error sending message:", err)
      setError("Failed to send. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full flex flex-col items-center mt-12 mb-8">
      
      <div className="w-full relative overflow-hidden rounded-3xl border border-zinc-200 dark:border-white/10 bg-white/50 dark:bg-[#0a0a0a] backdrop-blur-md p-8 md:p-10 mb-10 shadow-lg dark:shadow-none transition-all duration-300">
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white font-satisfy mb-3">
              Got an idea? Let's talk.
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base max-w-md mx-auto lg:mx-0 leading-relaxed">
              Whether you have a question about my projects, want to build something together, or just want to ask me anything—drop a message below.
            </p>
          </div>

          <div className="w-full lg:w-[400px] shrink-0">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex gap-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white/30 transition-all"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white/30 transition-all"
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                required
                rows={3}
                className="w-full bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-900 dark:focus:ring-white/30 transition-all resize-none"
              />
              
              {error && <p className="text-red-500 text-xs px-1">{error}</p>}

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className="group flex items-center justify-center gap-2 w-full px-4 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {submitted ? (
                  <span className="text-black dark:text-black">Message Sent!</span>
                ) : isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-zinc-200 dark:border-white/10">
        
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/5 text-zinc-600 dark:text-white/60 hover:bg-zinc-100 dark:hover:bg-white/10 hover:text-zinc-900 dark:hover:text-white transition-all duration-300 text-sm font-medium"
          >
            <FileText size={20} className="group-hover:scale-110 transition-transform" />
            <span>Resume</span>
          </a>
          <a
            href="https://buymeacoffee.com/aryyann011"
            target="_blank"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/5 text-zinc-600 dark:text-white/60 hover:bg-zinc-100 dark:hover:bg-white/10 hover:text-zinc-900 dark:hover:text-white transition-all duration-300 text-sm font-medium"
          >
            <Coffee size={20} className="group-hover:rotate-12 transition-transform" />
            <span>Buy me a coffee</span>
          </a>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1.5">
          <div className="flex items-center gap-2">
            {/* <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span> */}
            <span className="text-lg text-zinc-700 dark:text-white/70 font-medium">Available for work</span>
          </div>
          <p className="text-zinc-500 dark:text-zinc-600 text-lg">
            © {new Date().getFullYear()} Aryan Mishra. Built with ❤️.
          </p>
        </div>
      </div>
      
    </div>
  )
}