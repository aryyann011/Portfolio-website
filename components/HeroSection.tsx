"use client"

import * as React from 'react'
import { IdentityCardDemo } from './Card'
import Greeting from './HelloAnimation'

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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit...
                    </div>
                </div>

                <div>
                    <IdentityCardDemo/>
                </div>
            </div>
        </div>
    )
}
