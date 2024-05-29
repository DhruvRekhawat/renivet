"use client"
import { Allura} from "next/font/google";
import Image from "next/image";
import Image1 from"@/assests/greenforest.jpg"
import Image2 from"@/assests/clothes.jpg"
import Image3 from"@/assests/yellowapple.jpg"
import Image4 from"@/assests/jasmin-chew-JeKQiy307rA-unsplash.jpg"
import Image5 from"@/assests/whitewalk.jpg"
import Image6 from"@/assests/whiterose.jpg"
import Icon1 from "@/assests/icons/carbon-footprint.png"
import Icon2 from "@/assests/icons/eco-friendly-fabric.png"
import Icon3 from "@/assests/icons/ethical.png"
import FB from "@/assests/icons/facebook.png"
import IG from "@/assests/icons/instagram.png"
import X from  "@/assests/icons/twitter.png"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import Navbar from "@/components/molecules/navbar";
import { Button } from "@/components/ui/button";
import Subscribe from "@/components/molecules/subscribeform";
import { motion } from "framer-motion"

const allura = Allura({subsets:["latin"],weight:["400"]})

export default function Home() {

  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } }, 
  }
  return (
    <main className="flex flex-col items-center justify-center">
        
    <Navbar></Navbar>
    <section className="grid grid-cols-1 w-full place-items-center bg-zinc-950 bg-clothes pt-48 md:h-screen"> 
    <motion.div
    initial="hidden"
    animate="show"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.15,
        },
      },
    }}
    className="flex flex-col items-center justify-start">  
    <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="text-2xl md:text-4xl md:w-2/3 text-brand-offwhite px-2 md:px-8 text-center font-bold">Welcome to Revinet,<br /><span className="text-white">where sustainable fashion meets transparency and empowerment</span></motion.h1>
    <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-brand-offwhite text-md px-2 md:px-8 py-4 text-center">Launching Soon: A Marketplace Like No Other</motion.p>
    <Button className="bg-black text-white hover:text-brand-offwhite mb-16"> Subscribe for updates</Button>

    </motion.div> 
      </section>

      <section className="flex flex-col space-y-4">
        <h1 className="text-center text-4xl  mt-16">What to Expect</h1>
        <p className=" text-center mx-auto md:w-2/3 px-2 ">Renivet&apos;s mission is to empower brands and shoppers who care about reducing fashion&apos;s environmental impact. We carefully vet every brand partner for robust sustainability practices, so you can discover and shop environmentally-conscious fashion with confidence.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-8 place-items-center gap-4 my-6">
          <Card className="">
            <CardHeader className="flex justify-center items-center gap-6"><Image src={Icon2} height={30} width={30} alt="icon"></Image><CardTitle className="text-center">Eco-Friendly Materials</CardTitle>
            <CardContent className="">Brands using organic, recycled and innovative plant-based fabrics to create sustainable products</CardContent></CardHeader>
          </Card>
          <Card className="">
            <CardHeader className="flex justify-center items-center gap-6"><Image src={Icon3} height={30} width={30} alt="icon"></Image><CardTitle className="text-center">Ethical & Fair Labor</CardTitle><CardContent className="">Safe conditions and protected rights for all workers through ethical manufacturing practices</CardContent></CardHeader>
          </Card>
          <Card className="">
            <CardHeader className="flex justify-center items-center gap-6"><Image src={Icon1} height={30} width={30} alt="icon"></Image><CardTitle className="text-center">Carbon-Conscious</CardTitle><CardContent className="">Initiatives to measure, reduce and offset carbon emissions and water usage across operations</CardContent></CardHeader>
          </Card>
        </div>
      </section>

        <motion.section 
        initial="hidden"
    animate="show"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.15,
        },
      },
    }}
    className="bg-clouds w-full flex flex-col p-2 md:p-6 justify-center items-center">
          <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="text-center text-wrap text-2xl text-white font-bold p-4">Join the <div className="md:text-8xl text-4xl md:-translate-y-8"><span className={allura.className}>Community</span></div></motion.h1>
          <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-white text-bold text-md  text-center text-wrap md:w-2/3 mx-auto">Fashion has the power to drive positive change. By subscribing, you&apos;re taking the first step towards a more sustainable future for our planet and the apparel industry</motion.p>
          <Card className="text-white my-6 p-6 h-full md:w-1/2 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border-transparent  ">
            <CardTitle className="text-md my-2">Subscribe To Our Newsletter</CardTitle>
            <Subscribe></Subscribe>
          </Card>
        </motion.section>
        

        <section className="my-8">
          <h1 className="text-4xl  text-center my-2">Contact Us</h1>
          <p className="text-brand-orange text-center mx-auto my-2">Have questions? We&apos;d love to hear from you. Reach out!</p>
          
        </section>
        <footer className="bg-black w-full px-8 py-4 flex flex-col md:flex-row justify-center items-center text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
            <ul className="text-brand-offwhite">
              <h1 className="text-lg text-brand-orangewhite">Important Links</h1>
              <li>About</li>
              <li>How it Works</li>
              <li>Subscribe</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
            <ul className="text-brand-offwhite">
              <h1 className="text-lg text-brand-orangewhite">Contact Us</h1>
              <li>Phone</li>
              <li>Email</li>
              <li>Address</li>
            </ul>
            <ul className="text-brand-offwhite">
              <h1 className="text-lg text-brand-orangewhite">Follow Us On:</h1>
              <div className="flex gap-4 justify-center items-center my-2">
              <li><Image src={FB} height={25} alt="social"></Image></li>
              <li><Image src={IG} height={25} alt="social"></Image></li>
              <li><Image src={X} height={25} alt="social"></Image></li>
              </div>
                           
            </ul>
            <p className="md:col-span-3 text-brand-offwhite">&copy; Renivet Private Limited</p>
          </div>
          
          
        </footer>
    </main>
  );
}

