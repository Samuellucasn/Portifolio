import './style.scss'

import {FiGithub} from 'react-icons/fi'
import {MdComputer} from 'react-icons/md'

const Project: React.FC<any> = ({thumbnail}) => {
    return (
        <div className='project'>
                <div className={thumbnail} />
                <div className="links">
                    <a href=""><button className="code" > <FiGithub /> code </button></a>
                    <a href=""><button className="website" > <MdComputer /> website </button></a>
                </div>
        </div>
    )
}

export default Project