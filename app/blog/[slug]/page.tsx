import {client,urlFor} from '@/sanity/lib/client'  
import { PortableText } from '@portabletext/react';

interface Post {
    title: string;
    description: string;
    body: Block[];
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

async function getBlogData(slug:string){
    const data:Post[] = await client.fetch(
        `*[slug.current == "${slug}"]{
            title,
            body,
              mainImage,
              time,
              publishedAt
          }`,
       );
      console.log(data)
      return data
}

const BlogPage = async ({params}:{params:{slug:string}}) => {

    const slug = params.slug;
    console.log('hello')
    const post = await getBlogData(slug)

  return (
    <main className='flex flex-col md:p-12 justify-center items-center bg-zinc-50'>
    
    <h1 className='text-lg md:text-4xl'>
        {post[0].title}
    </h1>
    <h2 className='my-2 font-semibold text-sm'>{post[0].time}</h2>
    <div className="h-96 aspect-square ">
    <img src={urlFor(post[0].mainImage).url()} alt='main image' className=" h-full w-full rounded-sm"></img>
    </div>
    <div className='mt-16 prose prose-blue'>
    <PortableText value={post[0].body}></PortableText>
    </div>
    </main>
  )
}

export default BlogPage