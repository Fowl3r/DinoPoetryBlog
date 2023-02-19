'use client'

import { useState } from "react"
import hamburgerBtn from "../../public/hamburger button.svg"
import sun from '../../public/sun.svg';
import searchIcon from '../../public/searchIconDark.svg';
import home from '../../public/homeDark.svg';
import quill from '../../public/QuillDark.svg';
import blog from '../../public/BlogDark.svg';
import Image from "next/image";
import {FaWindowClose} from 'react-icons/fa'
import Link from "next/link";


/* 
PLAN: 
Use search icon ✅
Use sun icon ✅
Use hamburger icon ✅
create hamburger overlay✅
create search function? - search poems
*/



export default function FooterMenu() {
  const [burgerMenu, setBurgerMenu] = useState(false)
  
  function Hamburger(){
    setBurgerMenu(!burgerMenu)
    console.log('Hamburger clciked')
  }
  return (
    <>
    <nav className='footer-bar'>
    
    <Image src={searchIcon} alt='search button' className="footer-menu-icon" />
    <Image src={sun} alt='theme toggler' className="footer-menu-icon" />
    
    { burgerMenu? (
      <button className="burger-close-container">
      <FaWindowClose onClick={Hamburger} className='burger-close' />
      </button>
    ) : (
      <button>
      <Image src={hamburgerBtn} alt='menu toggler' onClick={Hamburger} className="footer-menu-icon"/>
      </button>
    )
    }
    </nav>
    <nav className={
              burgerMenu
                ? "  burger-overlay  "
                : "  burger-overlay-hidden "
            }>
            <nav className="burger-menu-items-container">
            <Link href='/'>
        <button className="burger-menu-item">
        <Image  src={home} alt='home' className=" burger-menu-item-icon"  />
          Home
        </button>
        </Link>
        <Link href='/blog'>
        <button className="burger-menu-item">
        <Image src={blog} alt='poem blog' className=" burger-menu-item-icon"   />
          Blog
        </button>
        </Link>
        <Link href='/compose'>
        <button className="burger-menu-item">
        <Image src={quill} alt='compose' className=" burger-menu-item-icon"   />
          Compose
        </button>
        </Link>
        </nav>
    </nav>
    </>
  )
}
