"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Client, Databases, ID, AppwriteException } from "appwrite"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"
import { useMemo } from "react"
import DOMPurify from "dompurify"
import { useToast } from "@/app/hooks/use-toast"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

const useAppwrite = () => {
  return useMemo(() => {
    const client = new Client()
      .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
      .setProject(process.env.PROJECT_ID!)
    return new Databases(client)
  }, [])
}

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, "Please enter a valid phone number"),
  services: z.string(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(800, "Message cannot exceed 500 characters"),
}) satisfies z.ZodType<{
  name: string
  email: string
  phone: string
  services: string
  message: string
}>

export default function ContactForm() {
  const { toast } = useToast()
  const databases = useAppwrite()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      services: "",
      message: "",
    },
  })

  const sanitizeInput = (data: z.infer<typeof formSchema>) => {
    return {
      name: DOMPurify.sanitize(data.name.trim()),
      email: DOMPurify.sanitize(data.email.trim()),
      message: DOMPurify.sanitize(data.message.trim()),
      phone: DOMPurify.sanitize(data.phone.trim()),
      services: DOMPurify.sanitize(data.services.trim()),
    }
  }

  const handleServerError = (error: unknown) => {
    if (error instanceof AppwriteException) {
      return error.type === "document_already_exists"
        ? "This email has already been used"
        : "Database error occurred. Please try again."
    }
    return "An unexpected error occurred. Please try again later."
  }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const sanitizedData = sanitizeInput(values)
      await databases.createDocument(
        process.env.DATABASE_ID!,
        process.env.COLLECTION_ID!,
        ID.unique(),
        sanitizedData
      )

      toast({
        description: "Thank you for your message. We will get back to you soon.",
      })
      form.reset()
    } catch (error) {
      console.error("Submission Error:", error)
      const errorMessage = handleServerError(error)
      toast({
        title: "Submission Error",
        description: errorMessage,
        variant: "destructive",
      })
    }
  }

  return (
    <div className="max-w-[1000px] mx-auto py-20" id="contact">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">Contact Us</h2>
      <div className="flex justify-center border border-zinc-100 py-20 rounded-sm m-1">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="sm:max-w-2xl sm:space-y-6"
            aria-label="Contact form"
          >
            <div className="grid grid-cols-1 gap-3 md:flex md:gap-10">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Alex Carry"
                        autoComplete="name"
                        aria-required="true"
                        className="border-zinc-300 w-[250px] h-[40px]"
                      />
                    </FormControl>
                    <FormMessage data-testid="name-error" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="john@example.com"
                        autoComplete="email"
                        aria-required="true"
                        className="border-zinc-300 w-[250px] h-[40px]"
                      />
                    </FormControl>
                    <FormMessage data-testid="email-error" />
                  </FormItem>
                )}
              />
            </div>

            <div className="mt-3 grid grid-cols-1 gap-3 md:flex md:gap-10">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="+19176953712"
                        aria-required="true"
                        className="border-zinc-300 w-[250px] h-[40px]"
                      />
                    </FormControl>
                    <FormMessage data-testid="phone-error" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="services"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cleaning Services</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-[250px] h-[40px] border-zinc-300">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="carpetcleaning">Carpet Cleaning</SelectItem>
                          <SelectItem value="upholsterycleaning">Upholstery Cleaning</SelectItem>
                          <SelectItem value="hardwoodfloorcleaning">
                            Hardwood Floor Cleaning
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage data-testid="services-error" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl className="mt-4">
                    <Textarea
                      {...field}
                      placeholder="Type your message here..."
                      className="min-h-[140px] resize-y border-zinc-300"
                      aria-required="true"
                    />
                  </FormControl>
                  <FormMessage data-testid="message-error" />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full mt-4"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
