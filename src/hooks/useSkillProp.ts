import {skillProps} from '../interfaces/types'

import {FaReact, FaGitAlt, FaCss3Alt, FaNodeJs, FaHtml5, FaSass, DiJavascript1, SiTypescript, SiMongodb, GrMysql} from 'react-icons/all'

export const useSkillProp: (id: number) => {skillProps: Array<skillProps>, name: string} = (id) => {
    const skillProps: Array<skillProps> = [
        {color: '#d77242', icon: FaHtml5, name: 'HTML'},
        {color: '#2284c6', icon: FaCss3Alt, name: 'CSS'},
        {color: '#eed752', icon: DiJavascript1, name: 'JavaScript'},
        {color: '#2162a8', icon: SiTypescript, name: 'TypeScript'},
        {color: '#79b840', icon: FaNodeJs, name: 'NodeJs'},
        {color: '#3cb3e6', icon: FaReact, name: 'React'},
        {color: '#e286a6', icon: FaSass, name: 'Sass'},
        {color: '#eaeaea', icon: GrMysql, name: 'MySQL'},
        {color: '#44965c', icon: SiMongodb, name: 'MongoDB'},
        {color: '#af4141', icon: FaGitAlt, name: 'Git'}
    ]

    const name = skillProps[id].name

    return {
        skillProps, name
    }
}