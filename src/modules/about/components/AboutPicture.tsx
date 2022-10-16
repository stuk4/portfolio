
import picture from '../../../assets/images/profile.png'
export const AboutPicture = () => {
  return (
    <div className="about__picture">
          <picture>
            <img src={picture} className="glitch-effects__paths" alt="Image Bastian" />
            <span className='about__square'></span>
            <span className='about__triangle'>&#9650;</span>
          </picture>
      </div>
  )
}
