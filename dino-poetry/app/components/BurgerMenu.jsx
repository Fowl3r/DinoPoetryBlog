'use client'

import { useState } from "react"
import hamburgerBtn from "../../public/hamburger button.svg";
import home from '../../public/homeDark.svg';
import quill from '../../public/QuillDark.svg';
import blog from '../../public/BlogDark.svg';
import loginIcon from '../../public/loginDark.svg'
import {FaWindowClose} from 'react-icons/fa'
import Link from "next/link";
import {isLoggedIn} from "../lib/pocketbase";
import Image from "next/image";

/* 
problem: server and client are out of sync
because server doesn't know when the user is logged in
so renders different thing to client
I don't know why it is a problem when we are using client
*/

export default function BurgerMenu() {
    const [burgerMenu, setBurgerMenu] = useState(false)

    function Hamburger(){
        setBurgerMenu(!burgerMenu)
      }

  return (
    <>
    {
        burgerMenu? (
      <button className="burger-close-container">
      <FaWindowClose onClick={Hamburger} className='burger-close' />
      </button>
    ) : (
    <button>
      <Image src={hamburgerBtn} alt='menu toggler' onClick={Hamburger} className="footer-menu-icon"/>
     </button>
    )
    }
     <nav className={
              burgerMenu
                ? "  burger-overlay  "
                : "  burger-overlay-hidden "
            }> 
            <nav className="burger-menu-items-container">
            <Link href='/'>
        <button onClick={Hamburger} className="burger-menu-item">
        <Image  src={home} alt='home' className=" burger-menu-item-icon"  />
          Home
        </button>
        </Link>
        <Link href='/blog'>
        <button onClick={Hamburger} className="burger-menu-item">
        <Image src={blog} alt='poem blog' className=" burger-menu-item-icon"   />
          Blog
        </button>
        </Link>
        
        {isLoggedIn ?  
        <>
        <Link href='/compose'>
        <button onClick={Hamburger} className="burger-menu-item">
        <Image src={quill} alt='compose' className=" burger-menu-item-icon"   />
          Compose
        </button>
        </Link>
        <Link href='/auth'>
        <button onClick={Hamburger} className="burger-menu-item">
        <Image  src={loginIcon} alt='login' className=" burger-menu-item-icon"  />
          Log Out
        </button>
        </Link>
        </>
        :
        <Link href='/auth'>
        <button onClick={Hamburger} className="burger-menu-item">
        <Image  src={loginIcon} alt='login' className=" burger-menu-item-icon"  />
          Login
        </button>
        </Link>
        }
        </nav>
        </nav>
    </>
    )
}

