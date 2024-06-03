import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'vjtwn5e6',
  dataset: 'production',
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(client)

export function urlFor(source:any) {
    return builder.image(source)
  }
