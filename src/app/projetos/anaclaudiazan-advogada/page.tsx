'use client'

import { Main } from "@/layouts/main/layout"
import './page.scss'
import Image from "next/image"
import anaclaudiasite1 from '../../../../public/anaclaudiasite (1).png'
import anaclaudiasite2 from '../../../../public/anaclaudiasite (2).png'
import anaclaudiasite3 from '../../../../public/anaclaudiasite (3).png'
import anaclaudiasite4 from '../../../../public/anaclaudiasite (4).png'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function AnaClaudiaZanAdvogada() {

    return (
        <Main>
            <section className="project-introduction">
                <h1>Site - Ana Claudia Zan - Advogada de Direitos Autorais</h1>
                <p>Desenvolvemos o website oficial da Ana Cláudia Zan, uma marca que reflete elegância e sofisticação.
                    O projeto foi pensado para transmitir os valores da cliente, priorizando um design moderno, funcional e
                    otimizado para oferecer uma experiência única aos usuários.</p>
            </section>
            <section className="desafio-section">
                <div className="div-text">
                    <h1>Desafio</h1>
                    <p>Trabalhamos alinhados com a estética e os valores da
                        marca para criar um layout que reflete a personalidade da
                        Ana Cláudia Zan e Implementamos uma estrutura intuitiva para facilitar
                        a navegação, garantindo que as informações mais relevantes fossem facilmente acessíveis</p>
                        <h1>Solução & Resultado</h1>
                    <ul>
                        <li>Design sofisticado e alinhado à marca.</li>
                        <li>Navegação simplificada para destacar os serviços e produtos oferecidos.</li>
                        <li>Otimização técnica para SEO e carregamento rápido.</li>
                        <li><strong>Acesse o site:</strong> <a href="https://anaclaudiazan.com.br">https://anaclaudiazan.com.br</a></li>
                    </ul>    
                </div>
               

                <div className="div-carousel-project-images">
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

                    <h2>Imagens do Projeto</h2>
                </div>
                

            </section>
        </Main>
    )
}