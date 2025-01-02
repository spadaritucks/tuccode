'use client'

import Navbar from "@/components/navbar/component"
import { FC, ReactNode } from "react"
import './layout.scss'
import Footer from "@/components/footer/component"


export const Main: FC<{ children: ReactNode }> = ({ children }) => {

    return (
        <>

            <Navbar>
                <a href="/projetos">Projetos</a>
                <a href="/catalogo">Serviços</a>
               
            </Navbar>
            {children}
            <Footer />
        </>
    )
}