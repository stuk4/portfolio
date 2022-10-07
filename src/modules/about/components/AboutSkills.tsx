import React from 'react'
import reactLogo from '../../../assets/icons/react.svg'
import vueLogo from '../../../assets/icons/vue.svg'
import typeScriptLogo from '../../../assets/icons/typescript.svg'
import javascriptLogo from '../../../assets/icons/javascript.svg'
import htmlLogo from '../../../assets/icons/html.svg'
import cssLogo from '../../../assets/icons/css.svg'
import sassLogo from '../../../assets/icons/sass.svg';
export const AboutSkills = () => {
  return (
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
        <img src={typeScriptLogo} alt="TypeScript logo" />
        <span>TypeScript</span>
      </li>
      <li>
        <img src={javascriptLogo} alt="Javascript logo" />
        <span>Javascript</span>
      </li>
      <li>
        <img src={htmlLogo} alt="HTML logo" />
        <span>HTML</span>
      </li>
      <li>
        <img src={cssLogo} alt="CSS logo" />
        <span>CSS</span>
      </li>
      <li>
        <img src={sassLogo} alt="SASS logo" />
        <span>SASS</span>
      </li>
    </ul>
</div>
  )
}
