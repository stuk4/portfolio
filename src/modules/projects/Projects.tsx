import React from 'react'
import { TitleSection } from '../common/components/TitleSection'

export const Projects = () => {


    const handleMouseMove = (event: React.MouseEvent) => {
        const cards = document.getElementsByClassName("projects__card") as HTMLCollectionOf<HTMLElement>;
    
        for (const card of cards) {
            const rect = card.getBoundingClientRect(),
                    x = event.clientX - rect.left,
                    y = event.clientY - rect.top;
                
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        }
      }

  return (
    <section id='projects' >
            <TitleSection title="Projects" />
            <div className="projects__container"  onMouseMove={handleMouseMove}>
                <div className="projects__card" >
                   
                    <div className="projects__card-content">
                        <header>
                            <div className="projects__head">
                                {/* TODO: buscar como cambiar de color el svg */}
                                <svg  width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" stroke="#000" stroke-width="2" d="M9,22 L15,2 M17,17 L22,12 L17,7 M7,17 L2,12 L7,7"/>
                                </svg>
                            </div>
                            <div className="projects__card-body">
                                <h3>
                                    Lorem ipsum dolor sit amet.
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe alias soluta, quas impedit commodi molestiae!
                                </p>
                            </div>
                        </header>
                        
                        <footer>
                            <ul>
                                <li>React.js</li>
                                <li>Material UI</li>
                                <li>Charts.js</li>
                                <li>Micro-frontends</li>
                            </ul>
                        </footer>
                        
                    </div>
                </div>
                <div className="projects__card">

                    <div className="projects__card-content">

                        B
                    </div>
                    
                </div>
                <div className="projects__card">
                     
                    <div className="projects__card-content">
                    C
                    </div>
                </div>
                <div className="projects__card">
                    
                    <div className="projects__card-content">
                     D
                    </div>
                </div>
            </div>
    </section>
  )
}
