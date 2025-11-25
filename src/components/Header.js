"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import ThemeToggler from "./ThemeToggler";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import axios from "axios";
import { useEffect, useState } from "react";

const LINKS = [
  { title: "Project Philosophy", link: "#project-philosophy" },
  { title: "Solution", link: "#solution" },
  { title: "Team", link: "#team" },
  { title: "FAQ", link: "#faq" },
  { title: "Contact", link: "#contact" },
];

export default function Header() {
  const [linksData, setLinksData] = useState([]);
  const [ctaButtons, setCtaButton] = useState([]);
  const getHeaderData = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.apiURL}/api/v1/contents/getHeader`,
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        let links = response.data.data?.links?.map((link) => ({
          title: link.title,
          url: link?.url,
        }));

        setLinksData(links);
        setCtaButton(response.data.data.ctaButtons);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getHeaderData();
  }, []);
  return (
    <header className="px-6 lg:px-10 mx-auto h-16 flex justify-between items-center fixed top-0 w-full bg-white dark:bg-black z-10 shadow">
      <div className="relative flex items-center">
        <Image
          src={"/logo.png"}
          className="object-contain"
          height={50}
          width={50}
          alt="verite-logo"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-10">
        <NavigationMenu>
          <NavigationMenuList className="flex gap-6">
            {linksData.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link
                  href={item.url ?? "#"}
                  className="text-sm hover:underline transition"
                >
                  {item.title}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Right Side (Desktop) */}
      <div className="hidden lg:flex items-center gap-3">
        {ctaButtons.map((item) => (
          <Link key={item?._id} href={item?.url ?? "#"}>
            <Button className="theme-button">View App</Button>
          </Link>
        ))}
        <ThemeToggler />
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex items-center gap-3">
        <div className="relative">
          <ThemeToggler />
        </div>

        <Sheet>
          <SheetTrigger>
            <Menu className="h-6 w-6" />
          </SheetTrigger>

          <SheetContent side="right" className="w-4/5">
            <SheetHeader></SheetHeader>
            <div className="p-5">
              <nav className="flex flex-col mt-6 gap-6">
                {linksData.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className="text-lg font-medium"
                  >
                    {item.title}
                  </Link>
                ))}

                <Button className="mt-4 theme-button w-full">View App</Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
