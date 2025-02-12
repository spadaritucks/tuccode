'use client'
import Image from 'next/image'
import './component.scss'
import logo from '../../../public/Logo-tuccode-sem engrenagem.png'
import instagram from '../../../public/instagram rounded icon.png'
import whatsapp from '../../../public/whatsapp rounded icon.png'
import linkedin from '../../../public/linkedin.png'
import Link from 'next/link'
import { motion } from "motion/react"

export default function Footer() {

    return (
        <footer className="final-footer">
            <div className='footer-itens'>
                <motion.div
                    className="column"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <h2>Links</h2>
                    <ul className='footer-links'>
                        <li><a href="/projetos">Projetos</a></li>
                        <li><a href="/catalogo">Serviços</a></li>
                    </ul>
                </motion.div>
                <motion.div
                    className='column'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    <Image className='footer-logo' src={logo} alt='' />
                    <p>Na TUC CODE, somos especialistas em desenvolver soluções sob medida
                        para ajudar negócios e profissionais a se destacarem no mundo digital</p>
                </motion.div>

                <motion.div
                    className="column"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}

                >
                    <h2>Contato</h2>
                    <div className='rede-social'>

                        <a href="https://wa.me/5511960599793"><Image width={50} height={50} src={whatsapp} alt='' /></a>
                        <a href="https://www.instagram.com/tuccode_oficial"><Image className='social-logo' src={instagram} alt='' /></a>
                        <a href="https://www.linkedin.com/company/tuc-code-software-house-development-web/?viewAsMember=true"><Image className='social-logo' src={linkedin} alt='' /></a>
                    </div>
                </motion.div>
            </div>
            <div className='final-line-footer'>
                <p>TUC CODE - Software House & Development Web</p>
            </div>
        </footer>
    )
}