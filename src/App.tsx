
import './assets/scss/styles.scss'
import { NavBar } from './modules/layout/NavBar'
import reactLogo from './assets/icons/react.svg'
import vueLogo from './assets/icons/vue.svg'
import typeScriptLogo from './assets/icons/typescript.svg'
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
            <section id="about">
              <h2>{'<AboutMe />'}</h2>
              <div className="about__content">

                <div className="about__text">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis fugit aut atque molestiae deleniti.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, illum ullam! Soluta cumque deleniti tempora nesciunt nulla totam repudiandae eaque.</p>
                </div>
                {/* TODO: TRANSFORM ON A COMPONENT */}
                <div className="about__skills">
                    <ul>
                      <li>
                          <img src={reactLogo} alt="React logo" />
                          <span>React</span>
                       
                      </li>
                      <li>
                        <img src={vueLogo} alt="Vue logo" />
                        <span>Vue</span>
                      </li>
                      <li>
                        <img src={typeScriptLogo} alt="Vue logo" />
                        <span>TypeScript</span>
                      </li>
                      <li>Javascript</li>
                      <li>HTML</li>
                      <li>CSS</li>
                    </ul>
                </div>
                 <div className="about__picture">

                </div>
                
              </div>
            </section>
          </main>
      </div>
    </div>
  )
}

export default App
