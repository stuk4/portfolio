import { TitleSection } from "../common/components/TitleSection"
import { AboutPicture } from "./components/AboutPicture"
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
      <AboutPicture />
    </div>
  </section>
  )
}
