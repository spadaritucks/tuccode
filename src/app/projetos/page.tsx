'use client'

import { Main } from "@/layouts/main/layout"
import './page.scss'
import Image from "next/image"
import imoogiImage1 from '../../../public/imoogi (1).png'
import imoogiImage2 from '../../../public/imoogi (2).png'
import imoogiImage3 from '../../../public/imoogi (3).png'
import imoogiImage4 from '../../../public/imoogi (4).png'
import imoogiImage5 from '../../../public/imoogi (5).png'
import anaclaudiasite1 from '../../../public/anaclaudiasite (1).png'
import anaclaudiasite2 from '../../../public/anaclaudiasite (2).png'
import anaclaudiasite3 from '../../../public/anaclaudiasite (3).png'
import anaclaudiasite4 from '../../../public/anaclaudiasite (4).png'


import Button from "@/components/button/component"
import LinkIconArchor from '../../../public/link.png'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Projetos() {

    return (
        <Main>
            <section className="title-section">
                <h1>Nossos Projetos</h1>
            </section>

            <section className="projetos-section">
                <div className="projetos-grid">
                    <div className="projeto-card">
                        
                        <Carousel orientation="horizontal">
                            <CarouselContent>
                                <CarouselItem><Image src={imoogiImage2} className="projeto-image" alt="image01"></Image></CarouselItem>
                                <CarouselItem><Image src={imoogiImage1} className="projeto-image" alt="image01"></Image></CarouselItem>
                                <CarouselItem><Image src={imoogiImage3} className="projeto-image" alt="image01"></Image></CarouselItem>
                                <CarouselItem><Image src={imoogiImage4} className="projeto-image" alt="image01"></Image></CarouselItem>
                                <CarouselItem><Image src={imoogiImage5} className="projeto-image" alt="image01"></Image></CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious style={{ position: "absolute", left: "20px" }} />
                            <CarouselNext style={{ position: "absolute", right: "20px" }} />
                        </Carousel>
                        <h2>Site + Sistema de Administração</h2>
                        <ul className="projeto-information">
                            <li><strong>Cliente : </strong>ACADEMIAS IMOOGI</li>
                            <li className="actions"><a href="/projetos/academias-imoogi"><Button buttonName="Ler Mais" type="button" variant="secondary" /></a>
                                <a href="https://academiasimoogi.com.br"><Image src={LinkIconArchor} alt="" className="link-icon" /></a>
                            </li>
                        </ul>

                    </div>
                    <div className="projeto-card">
                        
                        <Carousel orientation="horizontal">
                            <CarouselContent>
                                <CarouselItem><Image src={anaclaudiasite1} className="projeto-image" alt="image01"></Image></CarouselItem>
                                <CarouselItem><Image src={anaclaudiasite2} className="projeto-image" alt="image01"></Image></CarouselItem>
                                <CarouselItem><Image src={anaclaudiasite3} className="projeto-image" alt="image01"></Image></CarouselItem>
                                <CarouselItem><Image src={anaclaudiasite4} className="projeto-image" alt="image01"></Image></CarouselItem>
                                
                            </CarouselContent>
                            <CarouselPrevious style={{ position: "absolute", left: "20px" }} />
                            <CarouselNext style={{ position: "absolute", right: "20px" }} />
                        </Carousel>
                        <h2>Site - Ana Claudia Advogada</h2>
                        <ul className="projeto-information">
                            <li><strong>Cliente : </strong>Ana Claudia Zan - Advogada</li>
                            <li className="actions"><a href="/projetos/anaclaudiazan-advogada"><Button buttonName="Ler Mais" type="button" variant="secondary" /></a>
                                <a href="https://anaclaudiazan.com.br"><Image src={LinkIconArchor} alt="" className="link-icon" /></a>
                            </li>
                        </ul>

                    </div>
                </div>
            </section>
        </Main>
    )
}