"use client";
import { Project } from "@/types/Project";
import style from "./style.module.css";
import Video from "../Video";

export default async function LatestProject() {
  const req = await fetch(
    `https://videoart.am/api/projects?_sort=id:DESC&_start=0&_limit=1`,
    {
      cache: "no-store",
    }
  );
  const { Youtube }: Project = (await req.json())[0];
  return (
    <section className={style.LatestProject}>
      <div>
        <Video Link={Youtube} />
      </div>
    </section>
  );
}
