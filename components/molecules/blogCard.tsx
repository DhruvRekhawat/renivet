import { Button } from '../ui/button'
import { Card,CardHeader,CardContent,CardTitle,CardFooter } from '../ui/card'
import Image from 'next/image'
const BlogCard = () => {
  return (
    <Card>
        <CardHeader>
            Image
            <CardTitle></CardTitle>
        </CardHeader>
        <CardFooter>
            <Button>Read More</Button>
        </CardFooter>
    </Card>
  )
}

export default BlogCard