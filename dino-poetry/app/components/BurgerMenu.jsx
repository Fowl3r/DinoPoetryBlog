'use client'

import { useState, useEffect, useContext } from "react"
import { ThemeContext } from './ThemeContext';
import hamburgerDark from "../../public/hamburger button.svg";
import hamburgerLight from "../../public/hamburgerLight.svg";
import homeDark from '../../public/homeDark.svg';
import homeLight from '../../public/homeLight.svg';
import quillDark from '../../public/QuillDark.svg';
import quillLight from '../../public/QuillLight.svg';
import blogDark from '../../public/BlogDark.svg';
import blogLight from '../../public/BlogLight.svg';
import loginDark from '../../public/loginDark.svg';
import loginLight from '../../public/loginLight.svg';
import { FaWindowClose } from 'react-icons/fa';
import Link from "next/link";
import Image from "next/image";
import { pb } from "../lib/pocketbase";

export default function BurgerMenu() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const { theme } = useContext(ThemeContext);

  console.log('Current theme in BurgerMenu:', theme);

  function Hamburger() {
    setBurgerMenu(!burgerMenu)
  }

  useEffect(() => {
    if (pb.authStore.isValid) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
  }, [pb.authStore.isValid])

  return (
    <>
      {
        burgerMenu ? (
          <button className="burger-close-container">
            <FaWindowClose onClick={Hamburger} className='burger-close' />
          </button>
        ) : (
          <button>
            <Image src={theme === 'light' ? hamburgerLight : hamburgerDark} alt='menu toggler' onClick={Hamburger} className="footer-menu-icon" />
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
              <Image src={theme === 'light' ? homeLight : homeDark} alt='home' className=" burger-menu-item-icon" />
              Home
            </button>
          </Link>
          <Link href='/blog'>
            <button onClick={Hamburger} className="burger-menu-item">
              <Image src={theme === 'light' ? blogLight : blogDark} alt='poem blog' className=" burger-menu-item-icon" />
              Blog
            </button>
          </Link>

          {loggedIn ?
            <>
              <Link href='/compose'>
                <button onClick={Hamburger} className="burger-menu-item">
                  <Image src={theme === 'light' ? quillLight : quillDark} alt='compose' className=" burger-menu-item-icon" />
                  Compose
                </button>
              </Link>
              <Link href='/dashboard'>
                <button onClick={Hamburger} className="burger-menu-item">
                  <Image src={theme === 'light' ? loginLight : loginDark} alt='login' className=" burger-menu-item-icon" />
                  Account
                </button>
              </Link>
            </>
            :
            <Link href='/auth'>
              <button onClick={Hamburger} className="burger-menu-item">
                <Image src={theme === 'light' ? loginLight : loginDark} alt='login' className=" burger-menu-item-icon" />
                Login
              </button>
            </Link>
          }
        </nav>
      </nav>
    </>
  )
}