"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import Subscribe from './subscribeform'
import { Card, CardTitle } from '@/components/ui/card'
import Image2 from"@/assests/clouds.webp"
import { Allura } from 'next/font/google'
const allura = Allura({subsets:["latin"],weight:["400"]})

const JointheCommunity = () => {
    const FADE_UP_ANIMATION_VARIANTS = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { type: "spring" } }, 
      }
  return (
    <motion.section 
    initial="hidden"
    animate="show"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.3,
        },
      },
    }}
    className="h-fit w-full flex flex-col p-4 md:p-6 justify-center items-center my-8 relative z-0" id="subscribe">
      <div className="h-full w-full absolute -z-10">
          <Image src={Image2} fill sizes="108vw" placeholder="blur" objectFit="cover" alt="clouds"  className="h-full w-full"></Image>
          </div>
          <motion.h1 variants={FADE_UP_ANIMATION_VARIANTS} className="text-center text-wrap text-2xl text-white font-bold p-4 relative z-10">From awareness to action. Join our <div className="md:text-8xl text-4xl"><span className={allura.className}>Community</span></div></motion.h1>
          <motion.p variants={FADE_UP_ANIMATION_VARIANTS} className="text-white text-bold text-md  text-center text-wrap md:w-2/3 mx-auto -translate-x-6 relative z-10">At Renivet, we&apos;re more than a marketplace—we&apos;re a community of individuals who appreciate thoughtful fashion and value transparency. Join us to connect with like-minded enthusiasts, share your experiences, and discover brands that align with your values. Together, we celebrate fashion that tells a story and supports meaningful choices. Join our community today and be part of a movement that values your unique perspective</motion.p>
          <Card className="text-white my-6 p-6 h-full w-full md:w-1/2 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border-transparent  ">
            <CardTitle className="text-md my-2">Subscribe To Our Newsletter</CardTitle>
            <Subscribe></Subscribe>
          </Card>
        </motion.section>
        
  )
}

export default JointheCommunity