import { Button } from "@/components/ui/button";
import BlogCarousel from "@/components/molecules/blogCarousel";
import Link from "next/link";
import Hero from "@/components/molecules/Hero";
import HowitWorks from "@/components/molecules/HowitWorks";
import JointheCommunity from "@/components/molecules/JointheCommunity";


export default function Home() {

  
  return (
    <main className="flex flex-col items-center justify-center">
       <Hero></Hero> 
        <HowitWorks></HowitWorks>
        <section className="flex flex-col space-y-4 w-full md:p-8 p-2">
          <h1 className="text-start text-4xl  mt-16">Latest Stories</h1>
          <h3><Link href="/blogs"><u>View all</u></Link></h3>
          <BlogCarousel></BlogCarousel>
        </section>

        <JointheCommunity></JointheCommunity>
        <section className="my-8" id="contact">
          <h1 className="text-4xl  text-center my-2">Contact Us</h1>
          <p className="text-center mx-auto my-2 w-2/3">Whether you&apos;re a conscious consumer with questions about our products or a brand interested in collaborating on sustainable fashion, we&apos;d love to connect. Your feedback, ideas, and inquiries are invaluable to us, and we&apos;re committed to fostering meaningful relationships. Contact us today and let&apos;s start a conversation. Together, we can create a more sustainable future for fashion.</p>
          <div className="w-full flex flex-wrap justify-center gap-6 items-center">
            <Button>Concious Consumer</Button>
            <Button>Brand Collaboration</Button>
          </div>
        </section>
        
    </main>
  );
}

