"use client"

import * as React from 'react'
import { IdentityCardDemo } from './Card'
import Greeting from './HelloAnimation'

export function Herosection(){
    return (
        <div className="relative flex flex-col justify-center items-start gap-2">
            <div className='flex flex-col-reverse md:flex-row justify-center items-center md:items-start gap-9'>
                
                <div className="flex justify-start pt-8 md:pt-16 text-lg text-zinc-600 dark:text-zinc-300 max-w-xl px-4 md:px-0 text-center md:text-left">
                    <div>
                        <Greeting/><br />
                        <div className="text-zinc-400 leading-relaxed max-w-xl">
  <p className="mb-4">
    I'm a <span className="text-zinc-600 dark:text-zinc-100 font-semibold">Full Stack Developer</span> who enjoys building web applications from the ground up from designing the 
    <span className="text-zinc-600 dark:text-zinc-100 font-semibold"> database</span> and 
    <span className="text-zinc-600 dark:text-zinc-100 font-semibold"> backend logic</span> to creating smooth, responsive 
    <span className="text-zinc-600 dark:text-zinc-100 font-semibold"> user interfaces</span> in the browser.
  </p>

<p>
  Right now I'm working on <span className="text-zinc-600 dark:text-zinc-100 font-semibold">Acute</span>, an autonomous 
  <span className="text-zinc-600 dark:text-zinc-100 font-semibold"> codebase patching agent</span> that utilizes 
  <span className="text-zinc-600 dark:text-zinc-100 font-semibold"> RAG-powered retrieval</span> and 
  <span className="text-zinc-600 dark:text-zinc-100 font-semibold"> AST-based surgical patching</span>. My background is deeply rooted in 
  <span className="text-zinc-600 dark:text-zinc-100 font-semibold"> backend web development</span> and building 
  <span className="text-zinc-600 dark:text-zinc-100 font-semibold"> real-time systems</span>, and I am currently applying those core system design principles to 
  <span className="text-zinc-600 dark:text-zinc-100 font-semibold"> AI engineering</span>.
</p>
</div>
                    </div>
                </div>
                
                <div>
                    <IdentityCardDemo/>
                </div>
                
            </div>
        </div>
    )
}