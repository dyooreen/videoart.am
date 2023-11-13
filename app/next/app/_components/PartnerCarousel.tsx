"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import fullPath from "@/lib/host";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
export default function PartnerCarousel({ Partners }: any) {
  return (
    <section className="h-64 w-full m-auto  grid border-y-2 border-black ">
      <Carousel
        autoPlay={true}
        arrows={false}
        responsive={responsive}
        className="h-full"
      >
        {Partners.map(({ Name, Logo }: any, i: number) => (
          <div className="relative h-full w-3/5 m-auto" key={i}>
            <Image
              alt={Name}
              src={fullPath(Logo.url, true)}
              fill
              style={{
                objectFit: "contain",
              }}
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
}
