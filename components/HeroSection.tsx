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
    Right now I'm working on <span className="text-zinc-600 dark:text-zinc-100 font-semibold">Workbench Studio</span>, a collaborative platform that combines 
    <span className="text-zinc-600 dark:text-zinc-100 font-semibold"> live document editing</span> with 
    <span className="text-zinc-600 dark:text-zinc-100 font-semibold"> system design diagrams</span>. I enjoy solving performance problems in 
    <span className="text-zinc-600 dark:text-zinc-100 font-semibold"> C++</span> and building 
    <span className="text-zinc-600 dark:text-zinc-100 font-semibold"> real-time systems</span> that feel fast and reliable. Most of my work focuses on 
    <span className="text-zinc-600 dark:text-zinc-100 font-semibold"> clean architecture</span>, 
    <span className="text-zinc-600 dark:text-zinc-100 font-semibold">efficient backends</span>, and 
    <span className="text-zinc-600 dark:text-zinc-100 font-semibold"> polished interfaces</span>.
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