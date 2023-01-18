import './style.scss'

import {Route, Link, Routes, BrowserRouter as Router} from 'react-router-dom'

const Projects: React.FC<any> = () => {
    return (
      <Router>
            <section className='projects'>
                <div className='project-one'>
                    <Link to={''}></Link>
                </div>
                <div className='project-two'>
                    <Link to={''}></Link>
                </div>
                <div className='project-three'>
                    <Link to={''}></Link>
                </div>
                <div className='project-four'>
                    <Link to={''}></Link>
                </div>
            </section>
      </Router>
    )
}

export default Projects