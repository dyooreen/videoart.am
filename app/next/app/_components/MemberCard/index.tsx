import style from "./style.module.css";
import { Member } from "@/types/Member";
import Image from "next/image";
import Link from "next/link";

export default function MemberCard({ Name, Photo, id, Username }: Member) {
  return (
    <Link href={"/m/" + Username}>
      <div className={style.member}>
        <div>
          <Image
            src={"https://videoart.am/api" + Photo.url}
            alt={Name}
            width={200}
            height={200}
          />
        </div>
        <div>{Name}</div>
      </div>
    </Link>
  );
}
