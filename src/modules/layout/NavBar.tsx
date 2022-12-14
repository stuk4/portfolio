import { useCallback, useLayoutEffect, useRef, useState } from "react";


export const NavBar = () => {
    
  const refNav = useRef<HTMLElement>(null)
  const refAside = useRef<HTMLDivElement>(null)
  const refMenuBurger = useRef<HTMLButtonElement>(null)

  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') { 
      refNav.current?.classList.remove('nav--hidden-shadow');
      if(window.scrollY ===0){
        refNav.current?.classList.remove('nav--shadow')
        refNav.current?.classList.add('nav--hidden-shadow');
      }
      if(lastScrollY < window.scrollY){
        refNav.current?.classList.add('nav--hidden')
        refNav.current?.classList.add('nav--shadow')
      }else{
        refNav.current?.classList.remove('nav--hidden')
      }
      setLastScrollY(window.scrollY)
    }
  }, [lastScrollY])

  useLayoutEffect(() => {
    window.addEventListener('scroll', controlNavbar)
  
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY])

  const handleOnClickMenuBurger = () => {
    refMenuBurger.current?.classList.toggle('aside__burger-change')
    refAside.current?.classList.toggle('aside__hide')
    document.body.classList.toggle('aside__blur')
  }
  return (
    <header className="header" ref={refNav}>
    <div className="nav">

      <nav>
        <a href="#" className="nav__link" >{'Home'}</a>
        <a href="#" className="nav__link" >{'AboutMe'}</a>
        <a href="#" className="nav__link" >{'Experience'}</a>
        <a href="#" className="nav__link" >{'Contact'}</a>

      </nav>
    </div>
    <div ref={refAside} className="aside__container aside__hide">
          <button tabIndex={0} ref={refMenuBurger} onClick={handleOnClickMenuBurger} type='button'>
            <div className="aside__burgerBox">
              <div className="aside__burger-line">
              </div>
            </div>
          </button>
        <aside >
          <nav className='aside__nav'>
            <ol>
                <li tabIndex={1}>
                  <a href="#" className='nav__link'>Home</a>
                </li>
                <li tabIndex={2}>
                  <a href="#" className='nav__link'>AboutMe</a>
                </li>
                <li tabIndex={3}> 
                  <a href="#" className='nav__link'>Experience</a>
                </li>
                <li tabIndex={4}>
                  <a href="#" className='nav__link'>Contact</a>
                </li>
                

            </ol>
         
          </nav>
        </aside>
    </div>
  </header>
  )
}
