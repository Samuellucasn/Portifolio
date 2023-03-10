import { ProjectCardType } from '../../interfaces/types'
import './style.scss'

import {FiGithub, MdComputer} from 'react-icons/all'

const ProjectCard: React.FC<ProjectCardType> = ({thumbnail, code, web}) => {
    return (
        <div className='project' data-aos="zoom-in">
                <div className='header' />
                <div className={thumbnail} />
                <div className="links">
                    <a href={code} target={'_blank'} rel={'external'} ><button className="code" > <FiGithub /> code </button></a>
                    <a href={web} target={'_blank'} rel={'external'}><button className="website" > <MdComputer /> website </button></a>
                </div>
        </div>
    )
}

export default ProjectCard