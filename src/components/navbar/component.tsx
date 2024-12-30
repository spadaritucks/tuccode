'use client'

import Image from "next/image";
import { ReactNode, useState } from "react"
import logo from '../../../public/logo tuccode + icon.png'
import hamburguer from '../../../public/hamburguer.png'
import close from '../../../public/close.png'
import './component.scss'
import Link from "next/link";


interface NavbarProps {
    children: ReactNode;
}

export default function Navbar({ children }: NavbarProps) {

    const [open, setOpen] = useState<boolean>(false);

    const handleOpenMenu = () => {
        setOpen(!open);
    }

    return (
        <nav className="nav-area">
            <Link href="/" className="link-logo"><Image className="logo" src={logo} alt="Logo"></Image></Link>
            <div className={`nav-links ${open ? 'open' : ''}`}>
                {children}
            </div>

            <div className="hamburguer-area" onClick={handleOpenMenu}>
                {open ? <Image src={close} alt="" className="hambuguer-menu" /> : <Image src={hamburguer} alt="" className="hambuguer-menu" />}
            </div>

        </nav>
    )
}