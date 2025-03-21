'use client'

import { Main } from "@/layouts/main/layout"
import './page.scss'
import Image from "next/image"
import talentsrhImage from '../../../../public/talentsrh-image (1).png'
import talentsrhImage2 from '../../../../public/talentsrh-image (2).png'
import talentsrhImage3 from '../../../../public/talentsrh-image (3).png'
import talentsrhImage4 from '../../../../public/talentsrh-image (4).png'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


export default function TalentsRH() {

    return (
        <Main>
            <section className="project-introduction">
                <h1>Sistema de Recrutamento e Seleção - Talents RH</h1>
                <p>Desenvolvemos um sistema completo de recrutamento e seleção para a Talents RH, 
                    utilizando Next.js e Laravel, garantindo alto desempenho e segurança.</p>
            </section>
            <section className="desafio-section">
                <div className="div-text">
                    <h1>Desafio</h1>
                    <p>Empresas enfrentam dificuldades no gerenciamento eficiente de vagas, processos seletivos e talentos. 
                        A descentralização das informações e a falta de integração entre candidatos, headhunters e clientes dificultam 
                        a tomada de decisões estratégicas, aumentando o tempo e os custos do recrutamento.</p>
                        <h1>Solução & Resultado</h1>
                    <ul>
                        <li>Gestão de vagas e processos seletivos em um único ambiente.</li>
                        <li>Controle eficiente de headhunters, candidatos e clientes.</li>
                        <li>Módulo de chamados e tickets para comunicação ágil.</li>
                        <li>Permissões diferenciadas para administradores, headhunters e clientes.</li>
                        <li>Integração com um microserviço de mapa e localização para otimizar o recrutamento.</li>
                        <li><strong>Acesse o site:</strong> <a href="https://talents-rh-web-front-end.vercel.app/">https://talents-rh-web-front-end.vercel.app/</a></li>
                    </ul>    
                </div>
               

                <div className="div-carousel-project-images">
                    <Carousel orientation="horizontal">
                        <CarouselContent>
                            <CarouselItem><Image src={talentsrhImage} className="projeto-image" alt="image01"></Image></CarouselItem>
                            <CarouselItem><Image src={talentsrhImage2} className="projeto-image" alt="image01"></Image></CarouselItem>
                            <CarouselItem><Image src={talentsrhImage3} className="projeto-image" alt="image01"></Image></CarouselItem>
                            <CarouselItem><Image src={talentsrhImage4} className="projeto-image" alt="image01"></Image></CarouselItem>

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