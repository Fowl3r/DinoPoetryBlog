'use client'
import Image from "next/image"
import { ThemeContext } from './ThemeContext';
import { useEffect, useState, useContext } from 'react';
import Link from "next/link"
import { pb } from '../lib/pocketbase';
import dinoLight from '../../public/DinoLightMode.svg'
import dinoDark from '../../public/dino.svg'

export default function TopNav() {
  const [loggedIn, setLoggedIn] = useState(false);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (pb.authStore.isValid) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, [pb.authStore.isValid]);

  return (
    <div className="top-nav">
      <Link href='/'>
        <Image 
          src={theme === 'light' ? dinoLight : dinoDark} 
          className="dino-icon" 
          alt='cartoon dinosaur clickable home navigation button' 
        />
      </Link>
      
      {/* Desktop navigation - only visible on large screens */}
      <div className="items-center hidden ml-auto lg:flex">
        <Link href="/" className="desktop-nav-link">
          Home
        </Link>
        <Link href="/blog" className="desktop-nav-link">
          Blog
        </Link>
        
        {loggedIn ? (
          <>
            <Link href="/compose" className="desktop-nav-link">
              Compose
            </Link>
            <Link href="/dashboard" className="desktop-nav-link">
              Account
            </Link>
          </>
        ) : (
          <Link href="/auth" className="desktop-nav-link">
            Login
          </Link>
        )}
      </div>
    </div>
  );
}