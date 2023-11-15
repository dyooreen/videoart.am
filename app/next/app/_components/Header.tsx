"use client";
import Link from "next/link";
import { MenuItem } from "@/types/Menu";
import { usePathname } from "next/navigation";
import LangBtn from "./LangBtn";
import flow from "@/lib/flow";
import { useEffect, useState } from "react";
export default function Header() {
  const [menu, setMenu] = useState<Array<MenuItem>>([]);
  const [langs, setLangs] = useState([]);
  const pathname = usePathname();

  const prefix = () => {
    if (pathname.split("/")[1] === "" || pathname === "") {
      return "";
    }
    return pathname.split("/")[1];
  };
  const name = "VIDEOART";

  useEffect(() => {
    flow(`/menus?_sort=Order&_locale=${prefix()}`).then((res) => setMenu(res));
    flow("/i18n/locales").then((data) => setLangs(data));
  },[]);

  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 z-10 h-fit">
      <header
        className={
          "h-28 flex items-center p-8 justify-between transition-all duration-500 bg-white shadow-lg"
        }
      >
        <div>
          <h1>
            <Link href={"/"} className="text-black text-2xl">
              {name}
            </Link>
          </h1>
        </div>
        <div className="flex">
          <ul className="flex items-center">
            {menu.map(({ Name, Slug }, i) => (
              <li
                key={i}
                className={
                  "mr-4 " +
                  (pathname == "/" + prefix() + (Slug === "/" ? "" : Slug)
                    ? "border-b-2 border-black"
                    : "")
                }
              >
                <Link
                  href={"/" + prefix() + (Slug === "/" ? "" : Slug)}
                  className="text-black  text-lg"
                >
                  {Name}
                </Link>
              </li>
            ))}
          </ul>
          <LangBtn langs={langs} />
        </div>
      </header>
    </div>
  );
}
