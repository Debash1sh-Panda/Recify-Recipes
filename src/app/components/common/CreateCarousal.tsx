"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";


type data={
    data:(string | StaticImport)[]
}


export function CreateCarousal({ data }:data) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  console.log("data",data);
  return (
    <div className="embla h-full bg-blue-300" ref={emblaRef}>
      <div className="embla__container ">
        {data?.map((url, index) => (
          <div className="embla__slide" key={index}>
            <Image
              src={url}
              alt="Slide 1"
              width={360}
              height={360}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
