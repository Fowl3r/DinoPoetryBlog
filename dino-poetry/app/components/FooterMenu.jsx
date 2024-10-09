import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import dynamic from 'next/dynamic';
import sun from '../../public/sun.svg';
import moon from '../../public/moon.svg';
import searchDark from '../../public/searchIconDark.svg';
import searchLight from '../../public/searchLight.svg';
import hamburgerDark from '../../public/hamburger button.svg';
import hamburgerLight from '../../public/hamburgerLight.svg';
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";
import Search from './Search';

export default function FooterMenu() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  console.log('Current theme in FooterMenu:', theme);

  return (
    <>
      <nav className='footer-bar'>
        <Search />
        <div onClick={toggleTheme}>
          <Image src={theme === 'dark' ? sun : moon} alt='theme toggler' className="footer-menu-icon" />
        </div>
        <BurgerMenu theme={theme} /> 
      </nav>
    </>
  )
}