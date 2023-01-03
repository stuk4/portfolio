
import './assets/scss/styles.scss'
import { About } from './modules/about/About'
import { Contact } from './modules/contact/Contact'
import { Experience } from './modules/experience/Experience'
import { Home } from './modules/home/Home'
import { NavBar } from './modules/layout/NavBar'
import { Projects } from './modules/projects/Projects'

function App() {
  
  return (
    <div className="layout">
      <NavBar  />
      <div id='content'>
          <main>
            <Home />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </main>
      </div>
    </div>
  )
}

export default App
