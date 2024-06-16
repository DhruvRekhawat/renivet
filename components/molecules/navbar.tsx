"use client"
import Image from "next/image"
import Logo from '@/assests/icons/R-PrimaryIcon.svg'
import Logo2 from '@/assests/icons/PrimaryName-Logo.svg'
import { Heart, X,Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <>
    <div className="bg-black text-white text-sm flex h-8 justify-center items-center w-full p-2">We Are Coming Soon <Heart className="text-white h-4"></Heart> </div>
    <nav className=" grid h-14 w-full grid-cols-3 px-4 bg-white place-items-center">
      
        
        <Image src={Logo} alt="logo" height={40} className=" justify-self-start"></Image>
        <Image src={Logo2} alt="logo" height={20} className=" hidden md:flex"></Image>
        <ul className="gap-4 text-md font-bold hover:cursor-pointer justify-self-end hidden md:flex  " >
            <Link href='#howitworks' className = "hover:-translate-y-0.5 transition-all"><li>How it Works</li></Link>
            <Link href='#subscribe' className = "hover:-translate-y-0.5 transition-all"><li>Subscribe</li></Link>
            <Link href='#contact' className = "hover:-translate-y-0.5 transition-all"><li>Contact</li></Link>
        </ul>
        <div className="absolute top-10 right-0 md:hidden">
        {isOpen?
        <div><Button size="icon" onClick={()=>setIsOpen(false)} className="absolute right-2 bg-brand-darkgreen">
          <X></X>
        </Button>
        <Card className="absolute z-40 top-12 h-screen right-0 w-screen m-0 animate-navbar">
          <CardContent className="flex flex-col w-full justify-center items-start text-xl list-none gap-6 py-8">
            <Link href='#howitworks' className = "hover:-translate-y-0.5 transition-all" onClick={()=>setIsOpen(false)}><li>How it Works</li></Link>
            <Link href='#subscribe' className = "hover:-translate-y-0.5 transition-all"  onClick={()=>setIsOpen(false)}><li>Subscribe</li></Link>
            <Link href='#contact' className = "hover:-translate-y-0.5 transition-all"    onClick={()=>setIsOpen(false)}><li>Contact</li></Link>
            </CardContent>
      </Card>
      </div>:
        <div className="">
        <Button size="icon" onClick={()=>setIsOpen(true)} className="absolute right-2 bg-brand-darkgreen">
          <Menu></Menu>
        </Button>
        
        </div>
        }
        </div>

    </nav>
    </>
  )
}

export default Navbar