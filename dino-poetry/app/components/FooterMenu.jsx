import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import dynamic from 'next/dynamic';
import sun from '../../public/sun.svg';
import moon from '../../public/moon.svg';
import searchIcon from '../../public/searchIconDark.svg';
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";
import Search from './Search';

export default function FooterMenu() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <nav className='footer-bar'>
        <Search />
        <div onClick={toggleTheme}>
          <Image src={theme === 'light' ? sun : moon} alt='theme toggler' className="footer-menu-icon" />
        </div>
        <BurgerMenu  /> 
      </nav>
    </>
  )
}
