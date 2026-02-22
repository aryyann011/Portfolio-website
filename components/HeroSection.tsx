"use client"

import * as React from  'react'
import { IdentityCardDemo } from './Card'
import Greeting from './HelloAnimation'
import { FlipSlot, Glitch, ParticleDissolve, ScrambleReveal, WaveRipple, WordSlide, ZoomBlur } from './WordAnimation'

export function Herosection(){
    return (
        <div className="relative flex flex-col justify-center mb-20 items-start gap-2 dark:text-white">
            {/* <div className='flex justify-center'>
                <p className='text-3xl'>Hola</p>
            </div> */}
            <div className='flex justify-center items-start gap-9'>
                <div className="flex justify-start pt-16 text-xl max-w-xl">
                    <div>
                        <Greeting/><br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis atque eos eligendi delectus, doloribus iure voluptates illum placeat vero eius provident dolore odit sapiente. Deleniti asperiores ex iure, fugit molestias vero adipisci provident odit officiis minima sint delectus est accusantium placeat voluptatem inventore laborum. Repellendus necessitatibus voluptatibus saepe possimus voluptatum.
                    </div>
                </div>
                <div>
                    <IdentityCardDemo/>
                </div>
            </div>
        </div>
    )
}
