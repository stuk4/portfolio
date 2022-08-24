
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
            <section className='home'>
              <div className="home__glitch">
                
                <h1 ref={refGlitchHome} className='glitch-effects glitch-effects__layers' data-text="BASTIAN PÉREZ DESARROLLADOR FRONT-END"><span>BASTIAN PÉREZ DESARROLLADOR FRONT-END</span></ h1>
              </div>
       
            </section>
          
          </main>
      </div>
    </div>
  )
}

export default App
