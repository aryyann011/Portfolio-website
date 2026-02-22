"use client"

import { IdentityCardDemo } from "./Card"
import Navbar from "./Navbar"
import { ThemeProvider } from "./themeProvider"
import * as React from 'react'

export function LayoutWrapper({children} : {children : React.ReactNode}){


    return (
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange>
            <Navbar/>

            <main>
                {children}
            </main>
        </ThemeProvider>
    )
}