import Image from "next/image"
import Logo from '@/assests/renivet-logo.png'
const Navbar = () => {
  return (
    <nav className="absolute top-0 h-18 w-full p-4 ">
        <div className="w-full flex justify-between items-center">
        <Image src={Logo} alt="logo" className="w-[100px] md:w-[200px]"></Image>
        <ul className="flex gap-4 text-white text-lg">
            <li>About</li>
            <li>How it Works</li>
            <li>Subscribe</li>
            <li>Contact</li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar