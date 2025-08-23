import Image from "next/image";
import React from "react";

const explore = [
  {
    id: 1,
    url: "https://picsum.photos/400/300",
    width: 400,
    height: 300,
    alt: "Random landscape image 1",
  },
  {
    id: 2,
    url: "https://picsum.photos/400/300?grayscale",
    width: 400,
    height: 300,
    alt: "Random grayscale landscape image 2",
  },
  {
    id: 3,
    url: "https://picsum.photos/400/300?blur",
    width: 400,
    height: 300,
    alt: "Random blurred landscape image 3",
  },
  {
    id: 4,
    url: "https://picsum.photos/400/300?random",
    width: 400,
    height: 300,
    alt: "Random landscape image 4",
  },
  {
    id: 1,
    url: "https://picsum.photos/400/300",
    width: 400,
    height: 300,
    alt: "Random landscape image 1",
  },
  {
    id: 2,
    url: "https://picsum.photos/400/300?grayscale",
    width: 400,
    height: 300,
    alt: "Random grayscale landscape image 2",
  },
  {
    id: 3,
    url: "https://picsum.photos/400/300?blur",
    width: 400,
    height: 300,
    alt: "Random blurred landscape image 3",
  },
  {
    id: 4,
    url: "https://picsum.photos/400/300?random",
    width: 400,
    height: 300,
    alt: "Random landscape image 4",
  },
  {
    id: 1,
    url: "https://picsum.photos/400/300",
    width: 400,
    height: 300,
    alt: "Random landscape image 1",
  },
  {
    id: 2,
    url: "https://picsum.photos/400/300?grayscale",
    width: 400,
    height: 300,
    alt: "Random grayscale landscape image 2",
  },
  {
    id: 3,
    url: "https://picsum.photos/400/300?blur",
    width: 400,
    height: 300,
    alt: "Random blurred landscape image 3",
  },
  {
    id: 4,
    url: "https://picsum.photos/400/300?random",
    width: 400,
    height: 300,
    alt: "Random landscape image 4",
  },
  {
    id: 1,
    url: "https://picsum.photos/400/300",
    width: 400,
    height: 300,
    alt: "Random landscape image 1",
  },
  {
    id: 2,
    url: "https://picsum.photos/400/300?grayscale",
    width: 400,
    height: 300,
    alt: "Random grayscale landscape image 2",
  },
  {
    id: 3,
    url: "https://picsum.photos/400/300?blur",
    width: 400,
    height: 300,
    alt: "Random blurred landscape image 3",
  },
  {
    id: 4,
    url: "https://picsum.photos/400/300?random",
    width: 400,
    height: 300,
    alt: "Random landscape image 4",
  },
  {
    id: 1,
    url: "https://picsum.photos/400/300",
    width: 400,
    height: 300,
    alt: "Random landscape image 1",
  },
  {
    id: 2,
    url: "https://picsum.photos/400/300?grayscale",
    width: 400,
    height: 300,
    alt: "Random grayscale landscape image 2",
  },
  {
    id: 3,
    url: "https://picsum.photos/400/300?blur",
    width: 400,
    height: 300,
    alt: "Random blurred landscape image 3",
  },
  {
    id: 4,
    url: "https://picsum.photos/400/300?random",
    width: 400,
    height: 300,
    alt: "Random landscape image 4",
  },
  {
    id: 1,
    url: "https://picsum.photos/400/300",
    width: 400,
    height: 300,
    alt: "Random landscape image 1",
  },
  {
    id: 2,
    url: "https://picsum.photos/400/300?grayscale",
    width: 400,
    height: 300,
    alt: "Random grayscale landscape image 2",
  },
  {
    id: 3,
    url: "https://picsum.photos/400/300?blur",
    width: 400,
    height: 300,
    alt: "Random blurred landscape image 3",
  },
  {
    id: 4,
    url: "https://picsum.photos/400/300?random",
    width: 400,
    height: 300,
    alt: "Random landscape image 4",
  },
  {
    id: 1,
    url: "https://picsum.photos/400/300",
    width: 400,
    height: 300,
    alt: "Random landscape image 1",
  },
  {
    id: 2,
    url: "https://picsum.photos/400/300?grayscale",
    width: 400,
    height: 300,
    alt: "Random grayscale landscape image 2",
  },
  {
    id: 3,
    url: "https://picsum.photos/400/300?blur",
    width: 400,
    height: 300,
    alt: "Random blurred landscape image 3",
  },
  {
    id: 4,
    url: "https://picsum.photos/400/300?random",
    width: 400,
    height: 300,
    alt: "Random landscape image 4",
  },
];

function page() {
  return (
    <div className="p-2 md:p-15 flex justify-center items-center">
      
      <div className="grid grid-cols-3 gap-2 justify-center items-center w-[100vw] md:w-[70vw] my-5">
      {explore?.map((data, index) => (

        <Image src={data.url} alt={data.alt} width={500} height={500} key={index} className="w-[200px] h-[100px] md:w-[400px] md:h-[300px]"/>
      ))}
      </div>
    </div>
  );
}

export default page;
