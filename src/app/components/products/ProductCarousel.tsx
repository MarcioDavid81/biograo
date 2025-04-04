"use client";

import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

export function ProductCarousel({children}: {children: React.ReactNode}) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <Carousel
      className="w-full mx-auto"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      {children}
      <CarouselPrevious className="hidden md:flex"/>
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}

/*Precisa receber o ProductCarouselContent como children pois um server component nao pode ser renderizado em um client component */
