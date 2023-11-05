import fullPath from "@/lib/host";
import Image from "next/image";

export default function Award({ Name, Description, Photo, i, projects }: any) {
  return (
    <div
      className={
        " flex w-10/12 m-auto mb-12 rounded-lg overflow-hidden h-[80vh] bg-gray-300 " +
        (i % 2 == 0 ? "flex-row-reverse" : "")
      }
    >
      <div className="p-6 w-1/3 grid items-center">
        <div>
          <h3 className="text-2xl text-center">{Name}</h3>
          <p className="text-lg overflow-auto h-full">{Description}</p>
          <br></br>
          <div>
            {projects.map((p: any, i: number) => (
              <div key={i}>#{p.Name}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative w-2/3  h-full">
        <Image
          src={fullPath(Photo.url)}
          fill
          style={{ objectFit: "cover" }}
          alt={Name}
        />
      </div>
    </div>
  );
}
