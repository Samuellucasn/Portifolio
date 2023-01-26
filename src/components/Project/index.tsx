import './style.scss'

import {FiGithub} from 'react-icons/fi'
import {MdComputer} from 'react-icons/md'

const Project: React.FC<any> = ({thumbnail, code, web}) => {
    return (
        <div className='project'>
                <div className='header' />
                <div className={thumbnail} />
                <div className="links">
                    <a href={code} target={'_blank'} rel={'external'} ><button className="code" > <FiGithub /> code </button></a>
                    <a href={web} target={'_blank'} rel={'external'}><button className="website" > <MdComputer /> website </button></a>
                </div>
        </div>
    )
}

export default Project