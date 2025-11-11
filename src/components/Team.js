"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const TEAMS = [
  {
    name: "Member One",
    role: "Founder",
    linkedInURL: "#",
    imgURL: "/user-1.png",
  },
  {
    name: "Member Two",
    role: "Tech lead",
    linkedInURL: "#",
    imgURL: "/user-2.png",
  },
  {
    name: "Member Three",
    role: "Head of People",
    linkedInURL: "#",
    imgURL: "/user-3.png",
  },
  {
    name: "Member Two",
    role: "Tech lead",
    linkedInURL: "#",
    imgURL: "/user-2.png",
  },
];

export function Teams() {
  return (
    <div className="w-full px-10 mx-auto my-10">
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {TEAMS.map((item, index) => (
            <CarouselItem key={index} className="basis-1 md:basis-1/3">
              <Card className="p-0 rounded-2xl shadow-sm">
                <CardContent className=" p-5 pb-0 flex items-center justify-betweenl">
                  <img
                    src={item.imgURL}
                    alt="logo"
                    className="object-contain"
                  />
                  <div className="w-full">
                    <p className="text-[#D1AAD7] text-base mb-2">
                      {item?.role}
                    </p>
                    <p className="text-2xl mb-2 capitalize">{item?.name}</p>
                    <Link href={item.linkedInURL} className="text-gray-400">
                      LinkedIn URL
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer" />
        <CarouselNext className="cursor-pointer" />
      </Carousel>
    </div>
  );
}
