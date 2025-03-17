"use client";

// import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cloudImages } from '@/constants/skills';
import { IconCloud } from "@/components/ui/icon-cloud";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface Hero1Props {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url?: string;
      style?: React.CSSProperties;
      variant?: string;
      className?: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const Hero1 = ({
  heading = "Ready to Work Smarter with AI?",
  description = "Ready to save time and reduce costs? Our small team specialises in custom AI solutions that deliver real results. Tell us about your challenges today.",
  buttons = {
    primary: {
      text: "Contact us",
      url: "#"
    },
  },
}: Hero1Props) => {
  const [open, setOpen] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // POST to the webhook URL
    fetch('https://primary-production-6093.up.railway.app/webhook/2024f776-33be-4cf6-9841-69befd4f8f8a', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        // Reset the form after successful submission
        form.reset();
        setOpen(false);
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        // You could add error handling UI here
      });
  }

  return (
    <section className="py-28 bg-[#F2F0EF]">
      <div className="container mx-auto">
        <div className="grid items-center gap-8 md:grid-cols-2 max-w-5xl mx-auto">
          <div className="flex flex-col items-start text-left">
            <h1 className="my-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl text-black">
              {heading}
            </h1>
            <p className="mb-8 max-w-xl text-zinc-800 text-lg">
              {description}
            </p>
            <div className="flex w-full flex-col justify-start gap-2 sm:flex-row">
              {buttons.primary && (
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full sm:w-auto bg-[#ee5656] hover:bg-[#ee5656]/90 text-white rounded-md">
                      {buttons.primary.text}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-black text-white border-gray-700">
                    <DialogHeader>
                      <DialogTitle className="text-white">Get in touch</DialogTitle>
                      <DialogDescription className="text-gray-300">
                        Fill out this form to get in touch with our team.
                      </DialogDescription>
                    </DialogHeader>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your name" 
                                  {...field} 
                                  className="bg-gray-60 text-white placeholder:text-gray-400 border-gray-700 focus:border-gray-500 focus:ring-gray-500" 
                                />
                              </FormControl>
                              <FormMessage className="text-white" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Email</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="your.email@example.com" 
                                  {...field} 
                                  className="bg-white-800 text-white placeholder:text-gray-400 border-gray-700 focus:border-gray-500 focus:ring-gray-500" 
                                />
                              </FormControl>
                              <FormMessage className="text-white" />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-white">Message</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Your message" 
                                  {...field} 
                                  className="bg-white-800 text-white placeholder:text-gray-400 border-gray-700 focus:border-gray-500 focus:ring-gray-500" 
                                />
                              </FormControl>
                              <FormMessage className="text-white" />
                            </FormItem>
                          )}
                        />
                        <Button 
                          type="submit" 
                          className="w-full bg-white text-black hover:bg-gray-200 border border-gray-300"
                        >
                          Submit
                        </Button>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>
          
          {/* Icon Cloud - BIGGER VERSION */}
          <div className="relative h-[500px] w-full flex items-center justify-center">
            <div className="scale-125 transform-gpu w-full h-full">
              <IconCloud 
                images={cloudImages}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero1 };

