'use client'

import Image from "next/image";
import { ReactNode } from "react"
import logo from '../../../public/logo tuccode + icon.png'
import './component.scss'
import Link from "next/link";


interface NavbarProps {
    children: ReactNode;
}

export default function Navbar({ children }: NavbarProps) {

    return (
        <nav className="nav-area">
            <Link href="/" className="link-logo"><Image className="logo" src={logo} alt="Logo"></Image></Link>
            {children}
            
        </nav>
    )
}