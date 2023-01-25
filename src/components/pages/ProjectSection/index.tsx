import './style.scss'

import {FiGithub} from 'react-icons/fi'
import {MdComputer} from 'react-icons/md'


const Projects: React.FC<any> = () => {
    return (
        <section className='projects'>
            <div className='project-one'>
                <div className="thumbnail" />
                <div className="links">
                    <a href=""><button className="code" > <FiGithub /> code </button></a>
                    <a href=""><button className="website" > <MdComputer /> website </button></a>
                </div>
            </div>

            <div className='project-two'>
                <div className="thumbnail" />
                <div className="links">
                    <a href=""><button className="code" > <FiGithub /> code </button></a>
                    <a href=""><button className="website" > <MdComputer /> website </button></a>
                </div>
            </div>

            <div className='project-three'>
                <div className="thumbnail" />
                <div className="links">
                    <a href=""><button className="code" > <FiGithub /> code </button></a>
                    <a href=""><button className="website" > <MdComputer /> website </button></a>
                </div>
            </div>

            <div className='project-four'>
                <div className="thumbnail" />
                <div className="links">
                    <a href=""><button className="code" > <FiGithub /> code </button></a>
                    <a href=""><button className="website" > <MdComputer /> website </button></a>
                </div>
            </div>
        </section>
    )
}

export default Projects