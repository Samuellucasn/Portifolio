import './style.scss'

import {Route, Link, Routes, BrowserRouter as Router} from 'react-router-dom'

const Projects: React.FC<any> = () => {
    return (
        <section className='projects'>
            <div className='project-one'>
                <div className="thumbnail" />
                <div className="info">
                    <p></p>
                    <div className="code" />
                    <div className="website" />
                </div>
            </div>
            <div className='project-two'>
                <div className="thumbnail" />
                <div className="info">
                    <p></p>
                    <div className="code" />
                    <div className="website" />
                </div>
            </div>
            <div className='project-three'>
                <div className="thumbnail" />
                <div className="info">
                    <p></p>
                    <div className="code" />
                    <div className="website" />
                </div>
            </div>
            <div className='project-four'>
                <div className="thumbnail" />
                <div className="info">
                    <p></p>
                    <div className="code" />
                    <div className="website" />
                </div>
            </div>
        </section>
    )
}

export default Projects