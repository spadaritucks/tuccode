'use client'

import { Main } from "@/layouts/main/layout"
import './page.scss'
import { motion } from "motion/react"

export default function Catalogo() {

    return (
        <Main>
            <section className="catalogo-sections ">
                <div className="div-catalogo background-1">
                    <motion.div
                        className="div-text"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <h1>Desenvolvimento de Sistemas Personalizados</h1>
                        <p>Criamos sistemas sob medida para atender às necessidades exclusivas de sua empresa. Seja para automação de processos,
                            gestão empresarial ou integração de dados, garantimos uma solução eficiente e escalável.</p>
                        <ul>
                            <li>ERP e CRM personalizados</li>
                            <li>Sistemas de gestão acadêmica, financeira e operacional</li>
                            <li>Integrações API e middleware</li>
                        </ul>
                    </motion.div>
                </div>

                <div className="div-catalogo background-2">
                    <motion.div
                        className="div-text"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <h1>Criação de Websites e Portais Web</h1>
                        <p>Desenvolvemos sites institucionais e portais personalizados que destacam a identidade da sua marca,
                            com foco em design, performance e usabilidade.</p>
                        <ul>
                            <li>Websites institucionais responsivos</li>
                            <li>Portais corporativos e de conteúdo</li>
                            <li>SEO integrado para melhor ranqueamento nos buscadores</li>
                        </ul>
                    </motion.div>
                </div>


                <div className="div-catalogo background-3 ">
                    <motion.div
                        className="div-text"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <h1>Desenvolvimento de Aplicativos</h1>
                        <p>Transformamos sua ideia em um aplicativo de sucesso. Desenvolvemos apps nativos e híbridos para Android e iOS,
                            com foco em experiência do usuário e performance.</p>
                        <ul>
                            <li>Aplicativos corporativos e de serviços</li>
                            <li>Apps para e-commerce e delivery</li>
                            <li>Integração com sistemas existentes</li>
                        </ul>
                    </motion.div>
                </div>

                <div className="div-catalogo background-4">
                    <motion.div
                        className="div-text"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <h1>Consultoria e Suporte Técnico</h1>
                        <p>Ajudamos sua empresa a escolher as melhores tecnologias para cada projeto,
                            oferecendo suporte técnico contínuo para garantir a excelência operacional..</p>
                        <ul>
                            <li>Consultoria em arquitetura de software</li>
                            <li>Suporte e manutenção de sistemas</li>
                            <li>Atualizações e melhorias contínuas</li>
                        </ul>
                    </motion.div>
                </div>
                <div className="div-catalogo background-5">
                    <motion.div
                        className="div-text"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <h1>Hospedagem e Infraestrutura em Nuvem</h1>
                        <p>Cuidamos de toda a infraestrutura necessária para garantir que seus sistemas e sites estejam sempre disponíveis,
                            seguros e com alta performance.</p>
                        <ul>
                            <li>Configuração de servidores e cloud</li>
                            <li>Gerenciamento de banco de dados e backups</li>
                            <li>Monitoramento 24/7</li>
                        </ul>
                    </motion.div>
                </div>
            </section>
        </Main>
    )
}