'use client'
import Image from "next/image"
import { ThemeContext } from './ThemeContext';
import { useContext } from 'react';
import Link from "next/link"
import dinoLight from '../../public/DinoLightMode.svg'
import dinoDark from '../../public/dino.svg'

export default function TopNav() {
  const { theme } = useContext(ThemeContext);

  console.log('Current theme in TopNav:', theme);
  return (
    <div className="top-nav">
    <Link href='/'>
    <Image src={theme === 'light' ? dinoLight : dinoDark} className="dino-icon" alt='cartoon dinosaur clickable home navigation button' />
    </Link>
    </div>
  )
}
