'use client'
import sun from '../../public/sun.svg';
import searchIcon from '../../public/searchIconDark.svg';
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";

export default function FooterMenu() {

  return (
    <>
    <nav className='footer-bar'>
    
    <Image src={searchIcon} alt='search button' className="footer-menu-icon" />
    <Image src={sun} alt='theme toggler' className="footer-menu-icon" />
   <BurgerMenu  /> 
   
    </nav>
    </>
  )
}
