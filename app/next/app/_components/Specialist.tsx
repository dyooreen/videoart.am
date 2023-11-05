import fullPath from "@/lib/host";
import Image from "next/image";

export default function Specialist({ Name, Photo }: any) {
  return (
    <div className="p-10">
      <div className="relative w-56 h-56 overflow-hidden rounded-2xl">
        <Image
          fill
          style={{ objectFit: "cover" }}
          src={fullPath(Photo.url)}
          alt={Name}
        />
      </div>
      <div className="mt-2 text-lg text-center">{Name}</div>
    </div>
  );
}
