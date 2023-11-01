"use client";
import Video from "./Video";

export default function Reel({ data }: any) {
  const { Headline, Youtube, ShortText } = data;
  return (
    <div className="w-screen m-auto  grid  ">
      <div className="py-20">
      <h3 className="text-3xl text-center">{Headline}</h3>
      <p className="text-center mt-4">{ShortText}</p>
      </div>
      <div>
        <Video Link={Youtube} />
      </div>
    </div>
  );
}
