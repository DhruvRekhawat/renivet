import Image from "next/image"
import Logo from '@/assests/icons/PrimaryLogo.svg'
import { Heart } from "lucide-react"
const Navbar = () => {
  return (
    <>
    <div className="bg-black text-white text-sm flex h-8 justify-center items-center w-full p-2">We Are Coming Soon <Heart className="text-white h-4"></Heart> </div>
    <nav className=" flex h-14 w-full items-center justify-between p-4">
      
        <Image src={Logo} alt="logo" height={80}></Image>
        <ul className="flex gap-4 text-md font-bold hover:cursor-pointer font-sans">
            <li>About</li>
            <li>How it Works</li>
            <li>Subscribe</li>
            <li>Contact</li>
        </ul>

    </nav>
    </>
  )
}

export default Navbar