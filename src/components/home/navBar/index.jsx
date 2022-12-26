import { useState } from 'react';
import './style.scss'
import { RiMenu3Line, RiCloseLine } from "react-icons/ri"

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#about_me">About me</a></p>
    <p><a href="#projects">Projects</a></p>
    <p><a href="#contact">Contact</a></p>
  </>
)

const NavBar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='navBar'>
        <div className="name">
            <p>Hadi Mohammed</p>
        </div>
        <div className="buttons">
          <Menu />
        </div>
        <div className="navbarMenu">
          {toggleMenu
            ? <RiCloseLine color="#fff" size={26}
                onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={26} 
                onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className="menuContainer">
              <Menu/>
            </div>
          )}
        </div>
    </div>
  )
}

export default NavBar