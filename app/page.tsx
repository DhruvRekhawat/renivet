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
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
        
    <section className="grid grid-cols-1 w-full place-items-center bg-zinc-950 bg-clothes pt-48 md:h-screen"> 
    <Navbar></Navbar>
    <div className="flex flex-col items-center justify-center">  
    <h1 className="text-4xl md:text-6xl text-brand-offwhite px-8 text-center">Welcome to Revinet,<br /><span className="text-brand-lightgreen">where sustainable fashion meets transparency and empowerment</span></h1>
    <p className="text-brand-offwhite text-2xl px-8 py-4 text-center">Launching Soon: A Marketplace Like No Other</p>
    <Button className="bg-brand-orangewhite text-brand-brown hover:bg-brand-orange hover:text-brand-offwhite mb-16"> Subscribe for updates</Button>

    </div> 
      </section>

      <section className="flex flex-col space-y-4">
        <h1 className="text-center text-4xl text-brand-brown mt-16">What to Expect</h1>
        <p className="text-brand-brown text-center mx-auto w-2/3 ">Renivet&apos;s mission is to empower brands and shoppers who care about reducing fashion&apos;s environmental impact. We carefully vet every brand partner for robust sustainability practices, so you can discover and shop environmentally-conscious fashion with confidence.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-8 place-items-center gap-4">
          <Card className="bg-brand-orangewhite">
            <CardHeader className="flex justify-center items-center gap-6"><Image src={Icon1} height={30} width={30} alt="icon"></Image><CardTitle className="text-center">Eco-Friendly Materials</CardTitle>
            <CardContent className="">Brands using organic, recycled and innovative plant-based fabrics to create sustainable products</CardContent></CardHeader>
          </Card>
          <Card className="bg-brand-orangewhite">
            <CardHeader className="flex justify-center items-center gap-6"><Image src={Icon2} height={30} width={30} alt="icon"></Image><CardTitle className="text-center">Ethical & Fair Labor</CardTitle><CardContent className="">Safe conditions and protected rights for all workers through ethical manufacturing practices</CardContent></CardHeader>
          </Card>
          <Card className="bg-brand-orangewhite">
            <CardHeader className="flex justify-center items-center gap-6"><Image src={Icon3} height={30} width={30} alt="icon"></Image><CardTitle className="text-center">Carbon-Conscious</CardTitle><CardContent className="">Initiatives to measure, reduce and offset carbon emissions and water usage across operations</CardContent></CardHeader>
          </Card>
        </div>
      </section>
        <section className="my-8 bg-brand-brown p-8 ">
          <h1 className="text-4xl text-brand-offwhite text-center my-2">Join The Community</h1>
          <h2 className="text-5xl text-brand-orangewhite my-4">Fashion has the power to drive positive change. By subscribing, you&apos;re taking the first step towards a more sustainable future for our planet and the apparel industry.</h2>
          <Button className="bg-brand-orangewhite text-brand-brown hover:bg-brand-offwhite w-full"> Subscribe Now</Button>
        </section>
        <section className="my-8 bg-clothesrack p-8 ">
          <h1 className="text-4xl text-brand-offwhite text-center my-2">Join The Community</h1>
          <h2 className="text-5xl text-brand-orangewhite my-4">Fashion has the power to drive positive change. By subscribing, you&apos;re taking the first step towards a more sustainable future for our planet and the apparel industry.</h2>
          <Button className="bg-brand-orangewhite text-brand-brown hover:bg-brand-offwhite w-full"> Subscribe Now</Button>
        </section>
        <section className="my-8 grid grid-cols-1 md:grid-cols-2">
          <div className="bg-brand-brown p-6">
          <h1 className="text-4xl text-brand-offwhite text-center my-2">Join The Community</h1>
          <h2 className="text-2xl text-brand-orangewhite my-4">Fashion has the power to drive positive change. By subscribing, you&apos;re taking the first step towards a more sustainable future for our planet and the apparel industry.</h2>
          <Button className="bg-brand-orangewhite text-brand-brown hover:bg-brand-offwhite w-full"> Subscribe Now</Button>
          </div>
          <Image src={Image2} alt="clothes"></Image>
        </section>
        <section className="my-8">
          <h1 className="text-4xl text-brand-brown text-center my-2">Subscribe to Our Newsletter</h1>
          <p className="text-brand-orange text-center mx-auto my-2">Don’t miss out on updates, launch details, and exclusive offers. <br /> Join the Renivet community today and be part of the change</p>
          <Card className="p-8 bg-brand-orangewhite">
            <Subscribe></Subscribe>
          </Card>
        </section>
        <section className="my-8">
          <h1 className="text-4xl text-brand-brown text-center my-2">Take a Sneak Peek</h1>
          <div className="grid">

          </div>
        </section>

        <section className="my-8">
          <h1 className="text-4xl text-brand-brown text-center my-2">Contact Us</h1>
          <p className="text-brand-orange text-center mx-auto my-2">Have questions? We’d love to hear from you. Reach out!</p>
          
        </section>
        <footer className="bg-brand-brown w-full px-8 py-4 flex flex-col md:flex-row justify-center items-center">
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

{/* <Image src={Image1} height={1000} alt="sustainable fashion"></Image>

<Image src={Image4} height={1000} alt="sustainable fashion"></Image>
<Image src={Image5} height={1000} alt="sustainable fashion"></Image>
<Image src={Image6} height={1000} alt="sustainable fashion"></Image> */}