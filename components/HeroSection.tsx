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
                                I’m a Full Stack Developer who builds robust, scalable web applications from the database to the browser. I don't just write code, I take full ownership of the platforms I engineer.
                            </p>
                            <p>
                                Currently, I'm building <span className="text-zinc-600 dark:text-zinc-100 font-semibold">Workbench Studio</span>, a high-performance collaborative environment that syncs live document editing with algorithmic system design graphs. Whether I'm solving bottlenecks in <span className="text-zinc-600 dark:text-zinc-100 font-semibold">C++</span> or architecting <span className="text-zinc-600 dark:text-zinc-100 font-semibold">real-time event-driven systems</span>, I approach problems with both a technical and product mindset. I focus on clean architecture, fast backends, and <span className="text-zinc-600 dark:text-zinc-100 font-semibold">highly polished, interactive user interfaces</span>.
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