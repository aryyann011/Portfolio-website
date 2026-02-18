"use client"

import navbar from "./Navbar"
import { ThemeProvider } from "./themeProvider"
import * as React from 'react'

export function layoutWrapper({children} : {children : React.ReactNode}){


    return (
        <ThemeProvider>
            
        </ThemeProvider>
    )
}