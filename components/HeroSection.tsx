"use client"

import * as React from 'react'
import { IdentityCardDemo } from './Card'
import Greeting from './HelloAnimation'

export function Herosection(){
    return (
        <div className="relative flex flex-col justify-center items-start gap-2">
            <div className='flex justify-center items-start gap-9'>
                <div className="flex justify-start pt-16 text-xl text-zinc-600 dark:text-zinc-300 max-w-xl">
                    <div>
                        <Greeting/><br />
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab nihil veniam, adipisci saepe nemo nam sunt vitae tenetur itaque, ducimus similique eius fuga. Ad nulla quis tenetur nam. Non fugiat eos repellendus minima temporibus itaque deleniti debitis eum libero consequatur, ipsam atque voluptates vero ea dolores nisi vitae rem autem.
                    </div>
                </div>
                <div>
                    <IdentityCardDemo/>
                </div>
            </div>
        </div>
    )
}