import { useEffect } from "react"

export const useSkillProp : any = (id :any) => {
    const skillProps = [
        {color: '#d77242', icon: 'AiOutlineHtml5'},
        {color: '#2284c6', icon: 'FaCss3Alt'},
        {color: '#eed752', icon: 'DiJavascript1'},
        {color: '#2162a8', icon: 'SiTypescript'},
        {color: '#79b840', icon: 'FaNodeJs'},
        {color: '#3cb3e6', icon: 'FaReact'},
        {color: '#eaeaea', icon: 'GrMysql'},
        {color: '#44965c', icon: 'SiMongodb'},
        {color: '#3590c1', icon: 'FaDocker'},
        {color: '#af4141', icon: 'FaGitAlt'}
    ]
    const skillName = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'NodeJs/Express', 'React', 'MySQL', 'MongoDB', 'Docker', 'Git']
    const skillDescription = []

    return {
        skillProps, skillName
    }
}