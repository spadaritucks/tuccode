'use client'

import Navbar from "@/components/navbar/component"
import { FC, ReactNode } from "react"
import './layout.scss'
import Footer from "@/components/footer/component"


export const Main: FC<{ children: ReactNode }> = ({ children }) => {

    return (
        <>

            <Navbar>
                <div className="nav-links">
                    <a href="">Clientes</a>
                    <a href="">Serviços</a>
                    <a href="">Contato</a>
                </div>
            </Navbar>
            {children}
            <Footer/>
        </>
    )
}