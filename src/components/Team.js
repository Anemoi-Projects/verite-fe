"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import axios from "axios";
import Autoplay from "embla-carousel-autoplay";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

export function Teams() {
  const [loading, setLoading] = useState(true);
  const [teamMembers, setTeamMembers] = useState([]);
  const { theme } = useTheme();
  const getTeamMembers = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.apiURL}/api/v1/team/getMembers?type=internalTeam`,
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        if (response.data.success) {
          setTeamMembers(response.data.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTeamMembers();
  }, []);

  if (loading) {
    return (
      <div className="w-[90%] mx-auto my-10">
        <PulseLoader size={25} color={theme == "light" ? "black" : "white"} />
      </div>
    );
  }
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
          {teamMembers.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <Card className="p-0 rounded-2xl shadow-sm">
                <CardContent className=" p-5 lg:pb-0 flex flex-col lg:flex-row items-center justify-between">
                  <img
                    src={item?.picture}
                    alt="logo"
                    className="mx-auto md:mx-0 object-contain"
                  />
                  <div className="w-full mt-3 lg:mt-0">
                    <p className="text-[#D1AAD7] text-base mb-2 text-center lg:text-left">
                      {item?.designation}
                    </p>
                    <p className="text-2xl mb-2 capitalize text-center lg:text-left">
                      {item?.name}
                    </p>
                    <div className="flex justify-center lg:justify-start">
                      <Link href={item.linkedIn} className="text-gray-400 ">
                        LinkedIn URL
                      </Link>
                    </div>
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
