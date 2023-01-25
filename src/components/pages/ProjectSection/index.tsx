import './style.scss'

import Project from '../../Project'

import {FiGithub} from 'react-icons/fi'
import {MdComputer} from 'react-icons/md'


const Projects: React.FC<any> = () => {
    return (
        <section className='projects'>
            <Project className='project-one' />
            <Project className='project-two' />
            <Project className='project-three' />
            <Project className='project-four' />
        </section>
    )
}

export default Projects