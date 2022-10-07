import { TitleSection } from "../common/components/TitleSection"

import picture from '../../assets/images/profile.png'
import { AboutSkills } from "./components/AboutSkills"
export const About = () => {
  return (
    <section id="about">
    <TitleSection title="AboutMe" />
    <div className="about__content">

      <div className="about__text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veritatis fugit aut atque molestiae deleniti.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, illum ullam! Soluta cumque deleniti tempora nesciunt nulla totam repudiandae eaque.</p>
        <AboutSkills />
      </div>
      {/* TODO: TRANSFORM ON A COMPONENT */}
      
       <div className="about__picture">
          <picture>
            <img src={picture} className="glitch-effects__paths" alt="Image Bastian" />
            <span className='about__square'></span>
            <span className='about__triangle'>&#9650;</span>
          </picture>
      </div>
      
    </div>
  </section>
  )
}
