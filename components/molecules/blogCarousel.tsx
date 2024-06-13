import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Card, CardContent } from "../ui/card"
import {client,urlFor} from '@/sanity/lib/client'  
import Image from "next/image"
import Link from "next/link";
interface Post {
    title: string;
    description: string;
    body: Block[];
    slug: Slug;
    time: string;
    mainImage:string;
  }
  
  interface Block {
    _key: string;
    markDefs: any[]; // You can replace 'any' with a more specific type if needed
    children: any[]; // You can replace 'any' with a more specific type if needed
    _type: string;
    style: string;
  }
  
  interface Slug {
    current: string;
    _type: string;
  }

async function getData() {
    const data:Post[] = await client.fetch(
      `*[_type == "post"]{
        title,
        description,
        time,
        body,
        slug,
        mainImage,
      }`,
     );
    console.log(data)
    return data
  }
  

const BlogCarousel = async() => {
 const blogData:Post[] = await getData();
 console.log(blogData)
  return (

        <Carousel
          opts={{
            align: "center",
          }}
          className=" flex justify-start items-center"
        >
          <CarouselContent className="">
            {blogData.map((blog, index) => (
              <CarouselItem key={index} className="md:basis-1/3 w-2/3">
                <div className="p-4 flex flex-wrap h-full">
                  <Card className="rounded-md w-[460px] bg-zinc-100 h-full ">

                      <div className="h-[250px] w-full p-1">
                    <Image src={urlFor(blog.mainImage).url()}  width={300} height={300} alt='main image' className=" h-full w-full rounded-sm"></Image>
                    </div>
                    <CardContent className="px-4 flex flex-col justify-between gap-2">
                    <span className="text-lg">{blog.title}</span>
                    <span className="font-semibold text-xs">Test Author</span>
                    <Link href={`/blog/${blog.slug.current}`} ><button className="bg-white hover:bg-zinc-900 hover:text-white transition-all rounded-lg text-xs border-none p-2 w-fit">{blog.time} read </button></Link>
                    </CardContent>
                      

                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      )
  
}

export default BlogCarousel