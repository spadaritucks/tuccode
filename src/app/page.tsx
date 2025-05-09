'use client'

import { Main } from "@/layouts/main/layout"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import image1 from '../../public/BANNER - SISTEMAS ROBUSTOS.jpg'
import image2 from '../../public/BANNER -SITE INSTITUCIONAL.jpg'
import image3 from '../../public/APLICATIVOS PERSONALISADOS - BANNER.jpg'
import introductionImage from '../../public/introduction-image.png'
import './page.scss'
import Button from "@/components/button/component"
import clientelogo1 from '../../public/dragao.png'
import clientelogo2 from '../../public/logo.png'
import { motion } from "motion/react"

export default function Home() {


  return (
    <Main>
      <motion.section
        className="carousel-section"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Carousel orientation="horizontal" >
          <CarouselContent>
            <CarouselItem><Image src={image1} alt="image01"></Image></CarouselItem>
            <CarouselItem><Image src={image2} alt="image02"></Image></CarouselItem>
            <CarouselItem><Image src={image3} alt="image03"></Image></CarouselItem>
          </CarouselContent>
          <CarouselPrevious style={{ position: "absolute", left: "20px" }} />
          <CarouselNext style={{ position: "absolute", right: "20px" }} />
        </Carousel>
      </motion.section>

      <section className="introduction-section">
        <motion.div
          className="text-div"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <h1>O QUE A <span style={{ color: "#0447ff", fontWeight: "700" }}>TUC CODE</span> OFERECE?</h1>
          <p>Na TUC CODE, somos especialistas em desenvolver soluções sob medida
            para ajudar negócios e profissionais a se destacarem no mundo digital</p>
          <ul className="serviços-list">
            <li>Sites Instistucionais</li>
            <li>Portifolios Profissionais</li>
            <li>E-commerces ou Lojas Virtuais</li>
            <li>Sistemas Robustos Personalizados</li>
            <li>Aplicativos Personalizados</li>


          </ul>
          <Button buttonName="Faça o Seu Orçamento" variant="primary" type="button" onClick={
            () => { window.location.href = 'https://wa.me/5511960599793' }
          } />
        </motion.div>

        <motion.div
          className="div-introduction-image"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}

        >
          <Image src={introductionImage} alt="Introduction-image" className="introduction-image" />
        </motion.div>


      </section>

      <section className="clientes-section">
        <h1>Nossos Clientes</h1>
        <motion.div
          className="clientes-container-grid"
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="cliente-div" >
            <Image className="cliente-logo" src={clientelogo1} alt="" />
          </div>
          <div className="cliente-div">
            <Image className="cliente-logo" src={clientelogo2} alt="" />
          </div>
         
        </motion.div>
      </section>


    </Main>
  )
}