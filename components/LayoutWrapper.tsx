"use client"

import Navbar from "./Navbar"
import { ThemeProvider } from "./themeProvider"
import * as React from 'react'

export function LayoutWrapper({children} : {children : React.ReactNode}){
    return (
        <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange 
        >
            <Navbar/>

            <main className="pt-16">
                {children}
            </main>
        </ThemeProvider>
    )
}