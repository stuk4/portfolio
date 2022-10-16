
import './assets/scss/styles.scss'
import { About } from './modules/about/About'
import { ExperienceTabs } from './modules/experience/ExperienceTabs'
import { Home } from './modules/home/Home'
import { NavBar } from './modules/layout/NavBar'

function App() {
  
  return (
    <div className="layout">
      <NavBar  />
      <div id='content'>
          <main>
            <Home />
            <About />
            <ExperienceTabs />
          </main>
      </div>
    </div>
  )
}

export default App
