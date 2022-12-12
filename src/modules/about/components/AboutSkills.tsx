import React from 'react'
import reactLogo from '../../../assets/icons/react.svg'
import vueLogo from '../../../assets/icons/vue.svg'
import typeScriptLogo from '../../../assets/icons/typescript.svg'
import javascriptLogo from '../../../assets/icons/javascript.svg'
import htmlLogo from '../../../assets/icons/html.svg'
import cssLogo from '../../../assets/icons/css.svg'
import sassLogo from '../../../assets/icons/sass.svg';
interface SkillImage {
  src: string
  alt: string
  title: string
}

const skillImages:SkillImage[] = [
  {
    src: reactLogo,
    alt: 'React logo',
    title: 'React'
  },
  {
    src: vueLogo,
    alt: 'Vue logo',
    title: 'Vue'
  },
  {
    src: typeScriptLogo,
    alt: 'TypeScript logo',
    title: 'TypeScript'
  },
  {
    src: javascriptLogo,
    alt: 'JavaScript logo',
    title: 'JavaScript'
  },
  {
    src: htmlLogo,
    alt: 'HTML logo',
    title: 'HTML'
  },
  {
    src: cssLogo,
    alt: 'CSS logo',
    title: 'CSS'
  },
  {
    src: sassLogo,
    alt: 'Sass logo',
    title: 'Sass'
  },
]

export const AboutSkills = () => {
  return (
    <div className="about__skills">
    <ul>
      {skillImages.map((skillImage, index) => (
        <li key={index}>
          <img src={skillImage.src} alt={skillImage.alt} />
          <span>{skillImage.title}</span>
        </li>
      ))}
    </ul>
 
</div>
  )
}
