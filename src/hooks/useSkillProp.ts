import { useEffect } from "react"

import {FaDocker, FaReact, FaGitAlt, FaCss3Alt, FaNodeJs, FaHtml5} from 'react-icons/fa'
import {DiJavascript1} from 'react-icons/di'
import {SiTypescript, SiMongodb} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'

export const useSkillProp : any = (id :any) => {
    const skillProps = [
        {color: '#d77242', icon: FaHtml5},
        {color: '#2284c6', icon: FaCss3Alt},
        {color: '#eed752', icon: DiJavascript1},
        {color: '#2162a8', icon: SiTypescript},
        {color: '#79b840', icon: FaNodeJs},
        {color: '#3cb3e6', icon: FaReact},
        {color: '#eaeaea', icon: GrMysql},
        {color: '#44965c', icon: SiMongodb},
        {color: '#3590c1', icon: FaDocker},
        {color: '#af4141', icon: FaGitAlt}
    ]
    const skillName = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'NodeJs/Express', 'React', 'MySQL', 'MongoDB', 'Docker', 'Git']
    const skillDescription = [
        ' linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web',
    ]

    return {
        skillProps, skillName
    }
}