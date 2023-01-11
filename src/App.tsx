
import './assets/scss/styles.scss'
import { About } from './modules/about/About'
import { Contact } from './modules/contact/Contact'
import { Experience } from './modules/experience/Experience'
import { Home } from './modules/home/Home'
import { NavBar } from './modules/layout/NavBar'
import { Projects } from './modules/projects/Projects'
import { IconLinkedIn } from './modules/common/icons-svg/IconLinkedIn';
import { IconGitHub } from './modules/common/icons-svg/IconGitHub';

function App() {

  return (
    <div className="layout">
      <NavBar />
      <div className="social-media">
        <ul>
          <li>    
              <a href="#">
              <IconLinkedIn />
              </a>
          </li>
          <li>    
              <a href="#">
              <IconGitHub />
              </a>
          </li>
        </ul>
      </div>
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
