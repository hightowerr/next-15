import { Menu } from "lucide-react";
import Image from 'next/image';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
}

const GradientButton = ({ children, className, ...props }: React.ComponentProps<typeof Button>) => {
  return (
    <div className="relative group">
      <Button
        {...props}
        className={`relative overflow-hidden border-none transition-all hover:scale-105 ${className}`}
      >
        <div className="absolute inset-0 opacity-60 transition-all duration-300 group-hover:opacity-100"
          style={{
            background: `url('#btn-left')`
          }}
        />
        {children}
      </Button>
    </div>
  );
};

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/logo.svg",
    alt: "logo",
    title: "NetJam",
  },
  menu = [
    // { title: "Home", url: "#" },
    // {
    //   title: "Products",
    //   url: "#",
    //   items: [
    //     {
    //       title: "Blog",
    //       description: "The latest industry news, updates, and info",
    //       icon: <Book className="size-5 shrink-0" />,
    //       url: "#",
    //     },
    //     {
    //       title: "Company",
    //       description: "Our mission is to innovate and empower the world",
    //       icon: <Trees className="size-5 shrink-0" />,
    //       url: "#",
    //     },
    //     {
    //       title: "Careers",
    //       description: "Browse job listing and discover our workspace",
    //       icon: <Sunset className="size-5 shrink-0" />,
    //       url: "#",
    //     },
    //     {
    //       title: "Support",
    //       description:
    //         "Get in touch with our support team or visit our community forums",
    //       icon: <Zap className="size-5 shrink-0" />,
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Resources",
    //   url: "#",
    //   items: [
    //     {
    //       title: "Help Center",
    //       description: "Get all the answers you need right here",
    //       icon: <Zap className="size-5 shrink-0" />,
    //       url: "#",
    //     },
    //     {
    //       title: "Contact Us",
    //       description: "We are here to help you with any questions you have",
    //       icon: <Sunset className="size-5 shrink-0" />,
    //       url: "#",
    //     },
    //     {
    //       title: "Status",
    //       description: "Check the current status of our services and APIs",
    //       icon: <Trees className="size-5 shrink-0" />,
    //       url: "#",
    //     },
    //     {
    //       title: "Terms of Service",
    //       description: "Our terms and conditions for using our services",
    //       icon: <Book className="size-5 shrink-0" />,
    //       url: "#",
    //     },
    //   ],
    // },
    // {
    //   title: "Pricing",
    //   url: "#",
    // },
    // {
    //   title: "Blog",
    //   url: "#",
    // },
  ],
}: Navbar1Props) => {
  return (
    <section className="fixed top-0 left-0 right-0 z-50 bg-[#F2F0EF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F2F0EF]/60">
      <div className="container px-6 md:px-6">
        {/* Desktop Menu */}
        <nav className="hidden h-16 items-center justify-between lg:flex">
          <div className="flex items-center gap-6">
            <a href={logo.url} className="flex items-center gap-2 mt-16">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-lg font-semibold">{logo.title}</span>
            </a>
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          {/* <a href="#contact">
            <GradientButton>
              Contact Us
            </GradientButton>
          </a> */}
        </nav>

        {/* Mobile Menu */}
        <div className="flex h-16 items-center justify-between lg:hidden">
          <a href={logo.url} className="flex items-center gap-2">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-lg font-semibold">{logo.title}</span>
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                  <a href={logo.url} className="flex items-center gap-2">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                    <span className="text-lg font-semibold">{logo.title}</span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="mt-4 flex flex-col gap-4">
                <Accordion type="single" collapsible>
                  {menu.map((item) => renderMobileMenuItem(item))}
                </Accordion>
                <a href="#contact" className="w-full">
                  <GradientButton className="w-full">
                    Contact Us
                  </GradientButton>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-muted-foreground">
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent>
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <a
      key={item.title}
      className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      {item.title}
    </a>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div>{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar1 };
