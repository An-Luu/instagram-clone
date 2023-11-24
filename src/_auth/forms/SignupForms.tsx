import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { useState } from "react"
import * as z from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, 
} from "@/components/ui/form"
import { SignupValidation } from "@/lib/validation" 



const SignupForms = () => {

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: ''
    },
  })
  return (
      <Form {...form}>
        <div className="sm:w-420 flex-center flex-col">
          <img src="/assets/images/logo.svg" alt="images"/>

          <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12 text-primary-foreground">Create a new account</h2>
          <p className="text-light-3 small-medium md:base-regular">To use Snapgram enter your details</p>
        

        <form onSubmit={form.handleSubmit()} className="flex 
        flex-col gap-5 w-full ">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary-foreground">Name</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary-foreground">Username</FormLabel>
                <FormControl>
                  <Input type="text" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary-foreground">Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-primary-foreground">Password</FormLabel>
                <FormControl>
                   <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
        </div>
    </Form>
  )
}

export default SignupForms