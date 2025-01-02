'use client'

import { Main } from "@/layouts/main/layout"
import './page.scss'
import Image from "next/image"
import anaclaudiasite1 from '../../../../public/anaclaudiasite (1).png'
import anaclaudiasite2 from '../../../../public/anaclaudiasite (2).png'
import anaclaudiasite3 from '../../../../public/anaclaudiasite (3).png'
import anaclaudiasite4 from '../../../../public/anaclaudiasite (4).png'
import imoogiImage1 from '../../../../public/imoogi (1).png'
import imoogiImage2 from '../../../../public/imoogi (2).png'
import imoogiImage3 from '../../../../public/imoogi (3).png'
import imoogiImage4 from '../../../../public/imoogi (4).png'
import imoogiImage5 from '../../../../public/imoogi (5).png'
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
                <h1>Site + Sistema de Administração - ACADEMIAS IMOOGI</h1>
                <p>Desenvolvemos o website e o sistema completo de administração para a Academias IMOOGI,
                    criando uma plataforma digital robusta que combina um site institucional moderno com um
                    sistema integrado de gerenciamento administrativo e área exclusiva para alunos.
                    Este projeto foi idealizado para atender às demandas da academia, oferecendo uma experiência
                    única tanto para visitantes quanto para administradores e alunos.</p>
            </section>
            <section className="desafio-section">
                <div className="div-text">
                    <h1>Desafio</h1>
                    <p>Criamos um layout moderno, alinhado à identidade visual da academia,
                        para atrair novos clientes e consolidar a presença digital da marca e desenvolvemos
                        um sistema com capacidade de gerenciar de alunos, contratos, planos, modalidades e funcionários com
                        controle de acesso baseado em níveis de permissão (administrador, aluno, etc.).</p>
                    <h1>Solução & Resultado</h1>
                    <ul>
                        <li>Um site institucional atraente e otimizado que posiciona a Academia Simoogi como referência no mercado.</li>
                        <li>Um sistema administrativo completo que facilita o gerenciamento das operações da academia.</li>
                        <li>Uma área do aluno funcional, que oferece transparência e praticidade aos usuários.</li>
                        <li><strong>Acesse o site:</strong> <a href="https://www.academiasimoogi.com.br"> https://www.academiasimoogi.com.br</a></li>
                    </ul>
                </div>


                <div className="div-carousel-project-images">
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

                    <h2>Imagens do Projeto</h2>
                </div>


            </section>
        </Main>
    )
}