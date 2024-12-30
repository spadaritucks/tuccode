'use client'
import Image from 'next/image'
import './component.scss'
import logo from '../../../public/logo tuccode + icon.png'
import instagram from '../../../public/instagram rounded icon.png'
import whatsapp from '../../../public/whatsapp rounded icon.png'
import linkedin from '../../../public/linkedin.png'
import Link from 'next/link'

export default function Footer() {

    return (
        <footer className="final-footer">
            <div className='footer-itens'>
                <div className="column">
                    <h2>Links</h2>
                    <ul className='footer-links'>
                        <li><a href="">Clientes</a></li>
                        <li><a href="">Serviços</a></li>
                        <li><a href="">Contato</a></li>
                    </ul>
                </div>
                <div className='column'>
                    <Image className='footer-logo' src={logo} alt='' />
                    <p>Na TUC CODE, somos especialistas em desenvolver soluções sob medida
                        para ajudar negócios e profissionais a se destacarem no mundo digital</p>
                </div>

                <div className="column">
                    <h2>Contato</h2>
                    <div className='rede-social'>

                        <a href=""><Image width={50} height={50} src={whatsapp} alt='' /></a>
                        <a href=""><Image className='social-logo' src={instagram} alt='' /></a>
                        <a href=""><Image className='social-logo' src={linkedin} alt='' /></a>
                    </div>
                </div>
            </div>
            <div className='final-line-footer'>
                <p>© 2024 TUC CODE - Software House & Development Web – Todos os direitos reservados</p>
            </div>
        </footer>
    )
}