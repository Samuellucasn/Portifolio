import {useEffect, useState} from 'react'
import './App.scss'
import '/src/style/animation.scss'

import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './components/pages/HomeSection'
import About from './components/pages/AboutSection'
import Projects from './components/pages/ProjectSection'

import {FiGithub, FaLinkedinIn} from 'react-icons/all'

function App() {
  const [renderFlashMensage, setRenderFlashMensage] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  setTimeout(() => {
    setRenderFlashMensage(false)
  }, 3000)

  return (
    <>
    {
      renderFlashMensage && 
        <div className='flash-mensage'>
          <span>endereço de email copiado</span>
        </div>
    }

    <main>
      <Home />
      <About flashMensage={setRenderFlashMensage}/>
      <Projects />
    </main>

    <footer>
      <p>Rio de Janeiro - RJ</p>

      <div className="email-copy" onClick={() => 
        {
          navigator.clipboard.writeText("samuellucasnogueira@gmail.com").then(() => {
            setRenderFlashMensage(true)
          })
        }
      }>
        <span>samuellucasnogueira@gmail.com</span>
      </div>
      <div className="contact-icons">
        <a href='https://github.com/Samuellucasn' target={'_blank'} rel={'external'}><FiGithub /></a>
        <a href='https://www.linkedin.com/in/samuel-lucas-515b12218/' target={'_blank'} rel={'external'}><FaLinkedinIn /> </a>
      </div>
    </footer>

    </>    
  )
}

export default App
