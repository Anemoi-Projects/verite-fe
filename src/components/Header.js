import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import ThemeToggler from "./ThemeToggler";

const LINKS = [
  {
    title: "Project Philosophy",
    link: "#project-philosophy",
  },
  {
    title: "Solution",
    link: "#solution",
  },
  {
    title: "Team",
    link: "#team",
  },
  {
    title: "FAQ",
    link: "#faq",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];

const Header = () => {
  return (
    <header className="px-10 mx-auto h-16 flex justify-between items-center fixed top-0 w-full bg-white dark:bg-black z-10 shadow">
      <div className="relative">
        <Image
          src={"/logo.png"}
          className="object-contain"
          height={50}
          width={50}
          alt="verite-logo"
        />
      </div>
      <div className="flex flex-row gap-8">
        {LINKS.map((item, index) => (
          <Link href={item.link} key={`link-${index}`}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex flex-row gap-3 items-center">
        <Button className={"theme-button"}>View App</Button>
        <ThemeToggler />
      </div>
    </header>
  );
};

export default Header;
