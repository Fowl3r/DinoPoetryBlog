'use client'
import Image from "next/image"
import Link from "next/link"
import dino from '../../public/dino.svg'
export default function TopNav() {
  return (
    <div className="top-nav">
    <Link href='/'>
    <Image src={dino} className="dino-icon" alt='cartoon dinoasaur clickable home navigation button' />
    </Link>
    </div>
  )
}
