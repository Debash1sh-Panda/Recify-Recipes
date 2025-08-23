"use client";

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

export function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla h-full bg-blue-300" ref={emblaRef}>
      <div className="embla__container ">
        <div className="embla__slide">
          <Image
            src="/Carousel1.jpg"
            alt="Slide 1"
            width={720}
            height={906}
            className="w-full h-[100vh] object-cover"
          />
        </div>
        <div className="embla__slide">
          <Image
            src="/Carousel2.jpg"
            alt="Slide 2"
            width={720}
            height={960}
            className="w-full h-[100vh] object-cover"
          />
        </div>
        <div className="embla__slide">
          <Image
            src="/Carousel1.jpg"
            alt="Slide 3"
            width={720}
            height={960}
            className="w-full h-[100vh] object-cover"
          />
        </div>
      </div>
    </div>
  );
}