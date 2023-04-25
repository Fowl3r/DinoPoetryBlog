'use client'

import { useState, useEffect } from "react"
import hamburgerBtn from "../../public/hamburger button.svg";
import home from '../../public/homeDark.svg';
import quill from '../../public/QuillDark.svg';
import blog from '../../public/BlogDark.svg';
import loginIcon from '../../public/loginDark.svg'
import {FaWindowClose} from 'react-icons/fa'
import Link from "next/link";
import Image from "next/image";
import { pb } from "../lib/pocketbase";



export default function BurgerMenu() {
    const [burgerMenu, setBurgerMenu] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);


    
    function Hamburger(){
        setBurgerMenu(!burgerMenu)
      }

      useEffect(() => {
  
        if(pb.authStore.isValid) {
          setLoggedIn(true)
        } else {
          setLoggedIn(false)
        }
      },[pb.authStore.isValid])

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
        
        {loggedIn ?  
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

