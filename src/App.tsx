import './App.scss'

import Home from './components/pages/HomeSection'
import Me from './components/pages/MeSection'
import Projects from './components/pages/ProjectSection'

function App() {
  return (
    <>
    <header>
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Me</a></li>
            <li><a href="">Projects</a></li>
          </ul>
        </nav>
    </header>

    <main>
      <Home />
      <Me />
      <Projects />
    </main>
    </>    
  )
}

export default App
