import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import Image from 'next/image'

import Icon1 from "@/assests/icons/carbon-footprint.png"
import Icon2 from "@/assests/icons/eco-friendly-fabric.png"
import Icon3 from "@/assests/icons/ethical.png"

const HowitWorks = () => {
  return (
    <section className="flex flex-col space-y-10" id="howitworks">
    <h1 className="text-center text-4xl mt-16">What to Expect</h1>
    <p className=" text-center mx-auto md:w-2/3 px-2 ">We team up with forward-thinking brands to bring you an unparalleled journey of each product, from inception to your wardrobe. Our unique approach ensures that you&apos;re not just buying a product, but also investing in its journey, values, and impact on our planet.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-8 place-items-center gap-4 my-6">
      <Card className="w-full animate-fadeinup-1">
        <CardHeader className="flex justify-center items-center gap-6"><Image src={Icon2} height={30} width={30} alt="icon"></Image><CardTitle className="text-center">TRACE EVERY MATERIAL</CardTitle>
        <CardContent className="">Know the story behind every piece you wear.
        </CardContent></CardHeader>
      </Card>
      <Card className="w-full animate-fadeinup-2">
        <CardHeader className="flex justify-center items-center gap-6"><Image src={Icon3} height={30} width={30} alt="icon"></Image><CardTitle className="text-center">YOUR PURCHASE MATTERS</CardTitle><CardContent className="">
        So go beyond the tag
        </CardContent></CardHeader>
      </Card>
      <Card className="w-full animate-fadeinup-3">
        <CardHeader className="flex justify-center items-center gap-6"><Image src={Icon1} height={30} width={30} alt="icon"></Image><CardTitle className="text-center">CELEBRATE VALUES <br className="md:flex hidden"></br> <br /></CardTitle><CardContent className="">
        Wear what you value
          </CardContent></CardHeader>
      </Card>
    </div>
  </section>
  )
}

export default HowitWorks