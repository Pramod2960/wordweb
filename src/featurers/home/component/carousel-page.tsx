"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function CarouselWords() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const data = [
    { id: "6", title: "Ablation", pos: "noun", sankrit: "अङ्गांशछेदः" },

    {
      id: "257",
      title: "Back order",
      pos: "noun",
      sankrit: "आरक्षिताभियाचनम्",
    },
    {
      id: "613",
      title: "Chocolatey",
      pos: "adjective",
      sankrit: "चाकलेहगन्धितम्",
    },
    {
      id: "1078",
      title: "EdTech",
      pos: "noun",
      sankrit: "प्रौद्योगिकाश्रितशिक्षा",
    },
    { id: "798", title: "Karmic", pos: "adjective", sankrit: "कार्मिकम्" },
    {
      id: "1872",
      title: "Misgender",
      pos: "adjective",
      sankrit: "लिङ्गान्तरम्",
    },
    {
      id: "1952",
      title: "Neurosurgeon",
      pos: "Noun",
      sankrit: " नाडीतन्त्रज्ञः",
    },
    {
      id: "2793",
      title: "Whatevs",
      pos: "Interjection",
      sankrit: " यथाकथञ्चित्",
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-60 md:w-full md:max-w-md"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {data.map((item, index) => (
          <Link href={`/word/${item.id}`} key={index}>
            <CarouselItem className=" md:basis-1/2 ">
              <Card
                className="bg-linear-to-tr from-blue-600 to-sky-300
             shadow-md w-52"
              >
                <CardHeader>
                  <CardTitle className=" text-lg text-white font-semibold tracking-normal">
                    {" "}
                    {item.title}
                  </CardTitle>

                  <CardDescription className="text-white italic">
                    {item.pos}
                  </CardDescription>

                  <CardTitle className="text-white text-base font-normal">
                    {item.sankrit}
                  </CardTitle>
                  
                </CardHeader>
                {/* <CardContent></CardContent> */}
              </Card>
            </CarouselItem>
          </Link>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
