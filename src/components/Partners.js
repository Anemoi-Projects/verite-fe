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
import { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

export function Partners() {
  const [loading, setLoading] = useState(true);
  const [partners, setPartners] = useState([]);
  const { theme } = useTheme();
  const getPartners = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${process.env.apiURL}/api/v1/partner/getPartner`,
    };

    axios
      .request(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        if (response.data.success) {
          setPartners(response.data.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPartners();
  }, []);
  if (loading) {
    return (
      <div className="w-[90%] mx-auto my-10">
        <PulseLoader size={25} color={theme == "light" ? "black" : "white"} />
      </div>
    );
  }

  return (
    <div className="w-[90%] mx-auto my-10">
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
          {partners.map((partner, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            >
              <Card className="bg-black border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-sm h-28">
                <CardContent className="flex items-center justify-center h-full">
                  <img
                    src={partner?.logo}
                    alt={`${partner?.name}`}
                    className="h- w-auto aspect-auto object-contain transition-transform duration-300 hover:scale-105 dark:brightness-90"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
