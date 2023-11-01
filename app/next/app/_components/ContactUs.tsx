"use client";

import Image from "next/image";

const position: any = [51.505, -0.09];
export default function ContactUs({ data }: any) {
  const { Headline, Mail, Phone, Location } = data;
  return (
    <section className="w-screen h-[calc(100vh-7rem)]  justify-center items-center relative">
      <div className="h-full bg-slate-100 flex items-center justify-center">
        <div className="w-1/2 text-2xl grid h-min justify-center  ">
          <h3 className="text-3xl text-black">{Headline}</h3>
          <br></br>
          {Mail && (
            <div>
              <span className="font-extrabold">MAIL</span> <div>{Mail}</div>
            </div>
          )}
          <br></br>
          {Phone && (
            <div>
             <span className="font-extrabold">PHONE</span>  <div>{Phone}</div>
            </div>
          )}
        </div>
        <div className="w-1/2 overflow-hidden h-full border-2 relative ">
          <Image
            src={"https://videoart.am/api" + Location?.Map?.url}
            fill
            alt={Headline}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
