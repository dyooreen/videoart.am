"use client";
import go from "@/lib/getLang";
import getLang from "@/lib/getLang";
import fullPath from "@/lib/host";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type THeadline = {
  id: number;
  Headline: string;
  ShortText: string;
  Wallpaper: any;
  SeePortfolioText: string;
};
export default function Headline({
  Wallpaper,
  Headline,
  ShortText,
  SeePortfolioText,
}: THeadline) {
  const path = usePathname();
  return (
    <section className="w-screen h-[calc(100vh-7rem)] flex items-center relative">
      <Image
        src={fullPath(Wallpaper.url, true)}
        alt={Headline}
        fill
        priority
        className="-z-10"
        style={{
          objectFit: "cover",
        }}
      />
      <div className="bg-white w-3/6 relative left-10 grid top-20 p-12 rounded-lg shadow-lg">
        <h2 className="text-5xl">{Headline}</h2>
        <p className=" text-lg mt-4">{ShortText}</p>
        <Link
          href={go(path, "/portfolio")}
          className="bg-black  w-fit text-white p-4 mt-4 rounded-lg"
        >
          {SeePortfolioText}
        </Link>
      </div>
    </section>
  );
}
