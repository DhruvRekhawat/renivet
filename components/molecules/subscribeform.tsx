"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {toast, Toaster} from 'react-hot-toast'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"

const formSchema = z.object({
  email: z.string().email().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  
  
})

export default function Subscribe() {

   const [visible,setVisible] = useState(false)
   const success = () => toast.success('Form Submitted!')
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
      })
     
      // 2. Define a submit handler.
      async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
        await fetch('https://www.renivet.com/api/send',{
          method: "POST",
          headers:{
            "email": values.email
          }
        }).then(()=>{success(); setVisible(true)}).catch(()=>console.log('error'))
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              
              <FormControl>
                <Input placeholder="Enter Your Email to Join Our Newsletter!" {...field} />
              </FormControl>
              { 
              visible?
              <FormDescription className="text-white">Subscribed Successfully!</FormDescription>:
              <FormDescription></FormDescription>
          }
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-black text-brand-offwhite w-full">Submit</Button>
        <Toaster></Toaster>
      </form>

    </Form>
  )
}
