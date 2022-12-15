import React from 'react'
import { TitleSection } from '../common/components/TitleSection'
import { CardProject } from './components/CardProject';

export const Projects = () => {


    const handleMouseMove = (event: React.MouseEvent) => {
        const cards = document.getElementsByClassName("projects__card") as HTMLCollectionOf<HTMLElement>;
        const cardsArray = Array.from(cards);
        cardsArray.map((card) =>{

            const {left,top} = card.getBoundingClientRect();
            const x = event.clientX - left;
            const y = event.clientY - top;
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
        })
   
      }

  return (
    <section id='projects' >
        <TitleSection title="Projects" />
        <div className="projects__container"  onMouseMove={handleMouseMove}>
            <CardProject 
                title='Probando'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe alias soluta, quas impedit commodi molestiae!'
                technologies={['React.js','Vue.js','MaterialUI','Bulma.js']}
            />
            <CardProject 
                title='Probando'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe alias soluta, quas impedit commodi molestiae!'
                technologies={['React.js','Vue.js','MaterialUI','Bulma.js']}
            />
            <CardProject 
                title='Probando'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe alias soluta, quas impedit commodi molestiae!'
                technologies={['React.js','Vue.js','MaterialUI','Bulma.js']}
            />
                
        </div>
    </section>
  )
}
