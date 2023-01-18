import './style.scss'

import {useSkillProp} from '../../../hooks/useSkillProp'

import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

import Stamp from '../../Stamp'
import React, { useState } from 'react'

const Me: React.FC<any> = () => {
    const [skillId, setSkillId] = useState(0)

    const {skillProps, teste} = useSkillProp(skillId)

    return (
        <section className='about-main'>

            <section className="about-me">
                <div className="perfil-img" />
                <h1>Samuel Lucas</h1>
                <p>Jovem de 22 anos do Rio de Janeiro-RJ, atuo como desenvolvedor Front-End e estudo diariamente para me tornar Full-Stack. Programo a um ano desenvolvendo aplicações e sites que desafiam minhas limitações e me estimulam a evoluir. Amo programar e vejo na area de tech um futuro brilhante.</p>

                <div className="contacts">
                    <ul>
                        <li><a href=""><Stamp style={{backgroundColor: '#4a8df2'}}><BsLinkedin /></Stamp></a> GitHub</li>
                        <li><a href=""><Stamp style={{backgroundColor: '#ffff'}}><BsGithub /></Stamp></a> Linkedin</li>
                        <li><a href=""><Stamp style={{backgroundColor: '#d15d5d'}}><MdEmail /></Stamp></a> E-mail</li>
                    </ul>
                </div>
            </section>

            <section className="stack-wrapper">
                <h1>Stack</h1>

                <div className="stack">
                    <ul>
                        {
                            skillProps.map((v: any, i: number) => {
                                return <li key={i} onClick={() => setSkillId(i)} ><Stamp style={{backgroundColor: v.color}}>< v.icon /></Stamp></li>
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