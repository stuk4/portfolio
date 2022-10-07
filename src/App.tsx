
import './assets/scss/styles.scss'
import { About } from './modules/about/About'
import { NavBar } from './modules/layout/NavBar'

function App() {
  
  return (
    <div className="layout">
      <NavBar  />
      <div id='content'>
          <main>
            <section id='home'>
              <div className="home__glitch ">
                
                <h1  className='glitch-effects glitch-effects__layers' data-text="BASTIAN PÉREZ DESARROLLADOR FRONT-END"><span>BASTIAN PÉREZ DESARROLLADOR FRONT-END</span></ h1>
              </div>
              <div className="home__intro">
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo enim facilis optio quae exercitationem, quos atque cumque voluptates eos modi laboriosam ratione! Eum.</p>
              </div>
            </section>
            <About />
          </main>
      </div>
    </div>
  )
}

export default App
