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
import BlogCarousel from "@/components/molecules/blogCarousel";
import Link from "next/link";

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
    <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="text-2xl md:text-4xl md:w-2/3 text-white px-2 md:px-8 text-center font-bold">RENIVET<br /><span className="text-white">SEE THE DIFFERENCE : MAKE THE DIFFERENCE</span></motion.h1>
    <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-brand-offwhite text-md px-2 md:px-8 py-4 text-center">We are revolutionizing the way you shop for Fashion & Accessories </motion.p>
    <Link href='#subscribe'><Button className="bg-black text-white hover:text-brand-offwhite mb-16"> Step up and Subscribe</Button></Link>

    </motion.div> 
      </section>

      <section className="flex flex-col space-y-4" id="howitworks">
        <h1 className="text-center text-4xl  mt-16">What to Expect</h1>
        <p className=" text-center mx-auto md:w-2/3 px-2 ">We team up with forward-thinking brands to bring you an unparalleled journey of each product, from inception to your wardrobe. Our unique approach ensures that you&apos;re not just buying a product, but also investing in its journey, values, and impact on our planet.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-8 place-items-center gap-4 my-6">
          <Card className="w-full">
            <CardHeader className="flex justify-center items-center gap-6"><Image src={Icon2} height={30} width={30} alt="icon"></Image><CardTitle className="text-center">TRACE EVERY MATERIAL</CardTitle>
            <CardContent className="">Know the story behind every piece you wear.
            </CardContent></CardHeader>
          </Card>
          <Card className="w-full">
            <CardHeader className="flex justify-center items-center gap-6"><Image src={Icon3} height={30} width={30} alt="icon"></Image><CardTitle className="text-center">YOUR PURCHASE MATTERS</CardTitle><CardContent className="">
            So go beyond the tag
            </CardContent></CardHeader>
          </Card>
          <Card className="w-full">
            <CardHeader className="flex justify-center items-center gap-6"><Image src={Icon1} height={30} width={30} alt="icon"></Image><CardTitle className="text-center">CELEBRATE VALUES <br className="md:flex hidden"></br> <br /></CardTitle><CardContent className="">
            Wear what you value
              </CardContent></CardHeader>
          </Card>
        </div>
      </section>
        <section className="flex flex-col space-y-4 w-full md:p-8 p-2">
          <h1 className="text-start text-4xl  mt-16">Latest Stories</h1>
          <h3><Link href="/blogs"><u>View all</u></Link></h3>
          <BlogCarousel></BlogCarousel>
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
    className="bg-clouds w-full flex flex-col p-2 md:p-6 justify-center items-center my-8" id="subscribe">
          <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="text-center text-wrap text-2xl text-white font-bold p-4">From awareness to action. Join our <div className="md:text-8xl text-4xl"><span className={allura.className}>Community</span></div></motion.h1>
          <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-white text-bold text-md  text-center text-wrap md:w-2/3 mx-auto -translate-x-6">At Renivet, we&apos;re more than a marketplace—we're a community of individuals who appreciate thoughtful fashion and value transparency. Join us to connect with like-minded enthusiasts, share your experiences, and discover brands that align with your values. Together, we celebrate fashion that tells a story and supports meaningful choices. Join our community today and be part of a movement that values your unique perspective</motion.p>
          <Card className="text-white my-6 p-6 h-full md:w-1/2 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border-transparent  ">
            <CardTitle className="text-md my-2">Subscribe To Our Newsletter</CardTitle>
            <Subscribe></Subscribe>
          </Card>
        </motion.section>
        

        <section className="my-8" id="contact">
          <h1 className="text-4xl  text-center my-2">Contact Us</h1>
          <p className="text-center mx-auto my-2 w-2/3">Whether you&apos;re a conscious consumer with questions about our products or a brand interested in collaborating on sustainable fashion, we&apos;d love to connect. Your feedback, ideas, and inquiries are invaluable to us, and we&apos;re committed to fostering meaningful relationships. Contact us today and let&apos;s start a conversation. Together, we can create a more sustainable future for fashion.</p>
          <div className="w-full flex flex-wrap">
            <Card>Concious Consumer</Card>
            <Card>Brand Collaboration</Card>
          </div>
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

