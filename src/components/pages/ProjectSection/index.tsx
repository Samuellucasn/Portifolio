import './style.scss'

import {Route, Link, Routes, BrowserRouter as Router} from 'react-router-dom'

const Projects: React.FC<any> = () => {
    return (
        <section className='projects'>
            <div className='project-one'>
                <div className="header" />
                <div className="bg" />
            </div>
            <div className='project-two'>
                <div className="header" />
                <div className="bg" />
            </div>
            <div className='project-three'>
                <div className="header" />
                <div className="bg" />
            </div>
            <div className='project-four'>
                <div className="header" />
                <div className="bg" />
            </div>
        </section>
    )
}

export default Projects