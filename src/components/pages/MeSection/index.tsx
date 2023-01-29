import './style.scss'

import {useSkillProp} from '../../../hooks/useSkillProp'

import {SiGmail, FaLinkedinIn, FiGithub} from 'react-icons/all'

import Stamp from '../../Stamp'
import React, { useState } from 'react'

const Me: React.FC<any> = () => {
    const [skillId, setSkillId] = useState(0)

    const {skillProps, teste} = useSkillProp(skillId)

    return (
        <section className='about-main'>

            <section className="about-me" data-aos="fade-up">
                <div className="perfil-img" />
                <h1>Sobre mim</h1>
                <p>Jovem de 22 anos do Rio de Janeiro-RJ, atuo como desenvolvedor Front-End e estudo diariamente para me tornar Full-Stack. Programo a um ano desenvolvendo aplicações e sites que desafiam minhas limitações e me estimulam a evoluir. Amo programar e vejo na area de tech um futuro brilhante.</p>

                <div className="contacts">
                    <ul>
                        <li><a href='https://github.com/Samuellucasn' target={'_blank'} rel={'external'}><Stamp ><FaLinkedinIn /></Stamp></a> GitHub</li>
                        <li><a href='https://www.linkedin.com/in/samuel-lucas-515b12218/' target={'_blank'} rel={'external'}><Stamp><FiGithub /></Stamp></a> Linkedin</li>
                        <li><button onClick={() => {
                            navigator.clipboard.writeText("samuellucasnogueira@gmail.com")
                            alert()
                            }}><Stamp><SiGmail /></Stamp></button> E-mail</li>
                    </ul>
                </div>
            </section>

            <section className="stack-wrapper"  data-aos="fade-down">
                <h1>Stack</h1>

                <div className="stack">
                    <ul>
                        {
                            skillProps.map((v: any, i: number) => {
                                return <li key={i} onClick={() => setSkillId(i)} ><Stamp>< v.icon style={{fill: v.color}}/></Stamp></li>
                            })
                        }
                    </ul>
                </div>

                <h2>{teste.name}</h2>

                <p>{teste.desc}</p>
            </section>

        </section>
    )
}

export default Me