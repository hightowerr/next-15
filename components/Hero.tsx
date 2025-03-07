import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cloudImages } from '@/constants/skills';
import { IconCloud } from "@/components/ui/icon-cloud";

interface Hero1Props {
  badge?: string;
  heading: string;
  description: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
}

const Hero1 = ({
  heading = "Blocks Built With Shadcn & Tailwind",
  description = "Finely crafted components built with React, Tailwind and Shadcn UI. Developers can copy and paste these blocks directly into their project.",
  buttons = {
    primary: {
      text: "Discover all components",
      url: "https://www.shadcnblocks.com",
    },
  },
}: Hero1Props) => {
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
                <Button asChild className="w-full sm:w-auto bg-black hover:bg-black/90 text-white rounded-md">
                  <a href={buttons.primary.url}>{buttons.primary.text}</a>
                </Button>
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

