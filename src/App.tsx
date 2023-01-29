import {useEffect} from 'react'
import './App.scss'
import '/src/style/animation.scss'

import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './components/pages/HomeSection'
import Me from './components/pages/MeSection'
import Projects from './components/pages/ProjectSection'

import {FiGithub, FaLinkedinIn} from 'react-icons/all'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <>
    {/* <header>
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Me</a></li>
            <li><a href="">Projects</a></li>
          </ul>
        </nav>
    </header> */}

    <main>
      <Home />
      <Me />
      <Projects />
    </main>

    <footer>
      <h3>Contato</h3> 
      <p>Rio de Janeiro - RJ</p>

      <div className="email-copy" >
        <span>samuellucasnogueira@gmail.com</span>
      </div>
      <div className="contact-icons">
        <a href="https://github.com/Samuellucasn"><FiGithub /></a>
        <a href="https://www.linkedin.com/in/samuel-lucas-515b12218/"><FaLinkedinIn /> </a>
      </div>
    </footer>
    </>    
  )
}

export default App
