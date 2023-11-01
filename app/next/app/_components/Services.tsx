"use client";
import Image from "next/image";

export default function Services({ data }: any) {
  const { BackgroundPhoto, Headline, ShortText, Service } = data;
  return (
    <section className="w-screen h-[calc(100vh-7rem)]  items-center relative  overflow-hidden">
      {Headline && (
        <div className=" text-black py-20 ">
          <h3 className="text-3xl text-center ">{Headline}</h3>
          <p className="text-center mt-4">{ShortText}</p>
        </div>
      )}
      <div className="relative w-full h-full">
        <div className="flex justify-between h-full">
          <div className="w-5/12 relative"></div>
          <div className="w-5/12 relative p-14 h-full grid gap-y-14 bg-black opacity-70 backdrop-blur-xl">
            {Service.map(({ Name, ShortText }: any, i: number) => (
              <div className="text-white p-2" key={i}>
                <h3 className="text-3xl text-center ">{Name}</h3>
                <p className="text-center">{ShortText}</p>
              </div>
            ))}
          </div>
        </div>
        <Image
          src={"https://videoart.am/api" + BackgroundPhoto.url}
          alt={Headline}
          fill
          priority
          className="-z-10"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
}
