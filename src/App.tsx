import { HTMLAttributes, useEffect, useRef, useState } from 'react'
import './assets/scss/styles.scss'
function App() {

  const refNav = useRef<HTMLElement>(null)
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () =>{
    
    if (typeof window !== 'undefined') { 
      refNav.current?.classList.remove('nav--hidden-shadow');
      if(window.scrollY ===0)refNav.current?.classList.add('nav--hidden-shadow');
      
      if(lastScrollY < window.scrollY){
     
        refNav.current?.classList.add('nav--hidden')

      }else{
        console.log("We are going up ");
        refNav.current?.classList.remove('nav--hidden')
      }
      setLastScrollY(window.scrollY)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
  
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY])
  
  return (
    <div className="layout">
      <header className='nav' ref={refNav}>

        <nav>
          <a href="#" className="nav__link" >{'Home'}</a>
          <a href="#" className="nav__link" >{'AboutMe'}</a>
          <a href="#" className="nav__link" >{'Experience'}</a>
          <a href="#" className="nav__link" >{'Contact'}</a>

        </nav>
      </header>
      <div>
         <p>TEST estes testeste </p>
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ab veniam? A dolorem temporibus adipisci in voluptas praesentium? Minus, dicta amet. Voluptatibus odio in id, temporibus velit blanditiis cum ad!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint consectetur expedita, consequatur illo obcaecati sapiente, repellendus error adipisci suscipit architecto fugit temporibus fugiat nesciunt veritatis ipsum iure cupiditate. Molestiae, tenetur!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ab veniam? A dolorem temporibus adipisci in voluptas praesentium? Minus, dicta amet. Voluptatibus odio in id, temporibus velit blanditiis cum ad!
         </p>
         <p>text estes testeste </p>
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ab veniam? A dolorem temporibus adipisci in voluptas praesentium? Minus, dicta amet. Voluptatibus odio in id, temporibus velit blanditiis cum ad!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint consectetur expedita, consequatur illo obcaecati sapiente, repellendus error adipisci suscipit architecto fugit temporibus fugiat nesciunt veritatis ipsum iure cupiditate. Molestiae, tenetur!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ab veniam? A dolorem temporibus adipisci in voluptas praesentium? Minus, dicta amet. Voluptatibus odio in id, temporibus velit blanditiis cum ad!
         </p>
         <p>text estes testeste </p>
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ab veniam? A dolorem temporibus adipisci in voluptas praesentium? Minus, dicta amet. Voluptatibus odio in id, temporibus velit blanditiis cum ad!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint consectetur expedita, consequatur illo obcaecati sapiente, repellendus error adipisci suscipit architecto fugit temporibus fugiat nesciunt veritatis ipsum iure cupiditate. Molestiae, tenetur!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ab veniam? A dolorem temporibus adipisci in voluptas praesentium? Minus, dicta amet. Voluptatibus odio in id, temporibus velit blanditiis cum ad!
         </p>
         <p>text estes testeste </p>
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ab veniam? A dolorem temporibus adipisci in voluptas praesentium? Minus, dicta amet. Voluptatibus odio in id, temporibus velit blanditiis cum ad!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint consectetur expedita, consequatur illo obcaecati sapiente, repellendus error adipisci suscipit architecto fugit temporibus fugiat nesciunt veritatis ipsum iure cupiditate. Molestiae, tenetur!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ab veniam? A dolorem temporibus adipisci in voluptas praesentium? Minus, dicta amet. Voluptatibus odio in id, temporibus velit blanditiis cum ad!
         </p>
         <p>text estes testeste </p>
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ab veniam? A dolorem temporibus adipisci in voluptas praesentium? Minus, dicta amet. Voluptatibus odio in id, temporibus velit blanditiis cum ad!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint consectetur expedita, consequatur illo obcaecati sapiente, repellendus error adipisci suscipit architecto fugit temporibus fugiat nesciunt veritatis ipsum iure cupiditate. Molestiae, tenetur!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ab veniam? A dolorem temporibus adipisci in voluptas praesentium? Minus, dicta amet. Voluptatibus odio in id, temporibus velit blanditiis cum ad!
         </p>
         <p>text estes testeste </p>
         <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ab veniam? A dolorem temporibus adipisci in voluptas praesentium? Minus, dicta amet. Voluptatibus odio in id, temporibus velit blanditiis cum ad!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint consectetur expedita, consequatur illo obcaecati sapiente, repellendus error adipisci suscipit architecto fugit temporibus fugiat nesciunt veritatis ipsum iure cupiditate. Molestiae, tenetur!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ab veniam? A dolorem temporibus adipisci in voluptas praesentium? Minus, dicta amet. Voluptatibus odio in id, temporibus velit blanditiis cum ad!
         </p>
      </div>
    </div>
  )
}

export default App
