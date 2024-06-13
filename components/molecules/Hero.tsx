import Image from "next/image"
import Image1 from"@/assests/karina.webp"
import Link from "next/link"
import { Button } from "@/components/ui/button"
const Hero = () => {
    // const FADE_UP_ANIMATION_VARIANTS = {
    //     hidden: { opacity: 0, y: 10 },
    //     show: { opacity: 1, y: 0, transition: { type: "spring" } }, 
    //   }
  return (
    <section className="grid grid-cols-1  h-[75vh] md:h-screen w-full place-items-center bg-transparent"> 
      <div className="h-full w-full -z-10 absolute md:top-20 top-0">
      <Image src={Image1} layout="fill"
      objectFit="cover"        
    quality={100} loading="eager" placeholder="blur" alt="coverImage" className="brightness-75"></Image>
    </div>
    <div
    
    className="flex flex-col items-center justify-start">  
    <h1  className="text-2xl md:text-4xl md:w-2/3 text-white px-2 md:px-8 text-center font-bold">RENIVET<br /><span className="text-white">SEE THE DIFFERENCE : MAKE THE DIFFERENCE</span></h1>
    <p  className="text-brand-offwhite text-md px-2 md:px-8 py-4 text-center">We are revolutionizing the way you shop for Fashion & Accessories </p>
    <Link href='#subscribe'><Button className="bg-black text-white hover:text-brand-offwhite"> Step up and Subscribe</Button></Link>
    </div> 
      </section>
  )
}

export default Hero