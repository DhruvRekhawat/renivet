"use client"

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
          className="w-[80%] mx-8 md:translate-x-52 "
        >
          <CarouselContent className="">
            {blogData.map((blog, index) => (
              <CarouselItem key={index} className="md:basis-1/3">
                <div className="p-1">
                  <Card className="rounded-md">
                    <CardContent className="flex flex-col">
                    <Image src={urlFor(blog.mainImage).url()} width={500} height={200} alt='main image' className=""></Image>
                      <span className="text-lg font-semibold">{blog.title}</span>
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