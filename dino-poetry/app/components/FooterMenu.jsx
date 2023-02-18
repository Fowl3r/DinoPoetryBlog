'use client'

import { useState } from "react"
import hamburger from "../../public/hamburger button.svg"
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
create search function? - search poems
create hamburger overlay
*/



export default function FooterMenu() {
  const [burgerMenu, setBurgerMenu] = useState(false)
  
  function Hamburger(){
    setBurgerMenu(!burgerMenu)
    console.log('Hamburger clciked')
  }
  return (
    <>
    <div className='footer-bar'>
    
    <Image src={searchIcon} alt='search button' />
    <Image src={sun} alt='theme toggler' />
    
    { burgerMenu? (
      <FaWindowClose onClick={Hamburger} className='burger-close' />
    ) : (
      <Image src={hamburger} alt='menu toggler' onClick={Hamburger} />
    )
    }
    </div>
    <div className={
              burgerMenu
                ? "  burger-overlay  "
                : "  burger-overlay-hidden "
            }>
            <div className="burger-menu-items-container">
            <Link href='/'>
        <div className="burger-menu-item">
        <Image  src={home} alt='home' className=" burger-menu-item-icon"  />
          Home
        </div>
        </Link>
        <Link href='/blog'>
        <div className="burger-menu-item">
        <Image src={blog} alt='poem blog' className=" burger-menu-item-icon"   />
          Blog
        </div>
        </Link>
        <Link href='/'>
        <div className="burger-menu-item">
        <Image src={quill} alt='compose' className=" burger-menu-item-icon"   />
          Compose
        </div>
        </Link>
        </div>
    </div>
    </>
  )
}
