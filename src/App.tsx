import { Route, Link, Routes, BrowserRouter as Router } from 'react-router-dom'
import './App.scss'

import Home from './components/pages/HomeSection'
import Me from './components/pages/MeSection'
import Projects from './components/pages/ProjectSection'

function App() {
  return (
    <>
    <Router>
      <header>
        <nav>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/Me'}>Me</Link></li>
            <li><Link to={'/Projects'}>Projects</Link></li>
          </ul>
        </nav>
      </header>
    </Router>

    <Home />
    <Me />
    <Projects />
    </>    
  )
}

export default App
