import dynamic from 'next/dynamic';
import sun from '../../public/sun.svg';
import searchIcon from '../../public/searchIconDark.svg';
import Image from "next/image";
import BurgerMenu from "./BurgerMenu";
import Search from './Search';


export default function FooterMenu() {

  return (
    <>
    <nav className='footer-bar'>
    
    <Search />
    <Image src={sun} alt='theme toggler' className="footer-menu-icon" />
   <BurgerMenu  /> 
   
    </nav>
    </>
  )
}
