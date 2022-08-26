
import { LegacyRef, RefObject, useRef } from 'react'
import './assets/scss/styles.scss'
import { NavBar } from './modules/layout/NavBar'
function App() {
  const refGlitchHome = useRef<HTMLHeadingElement>(null)
  return (
    <div className="layout">
      <NavBar refGlitchHome={refGlitchHome} />
      <div id='content'>
          <main>
            <section id='home'>
              <div className="home__glitch ">
                
                <h1 ref={refGlitchHome} className='glitch-effects glitch-effects__layers' data-text="BASTIAN PÉREZ DESARROLLADOR FRONT-END"><span>BASTIAN PÉREZ DESARROLLADOR FRONT-END</span></ h1>
              </div>
              <div className="home__intro">
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo enim facilis optio quae exercitationem, quos atque cumque voluptates eos modi laboriosam ratione! Eum.</p>
              </div>
            </section>
            <section id="about">
              <h2>{'<AboutMe />'}</h2>
            </section>
          </main>
      </div>
    </div>
  )
}

export default App
