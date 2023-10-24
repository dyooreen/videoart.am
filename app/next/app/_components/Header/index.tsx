"use client";

import Link from "next/link";
import style from "./style.module.css";
import { MenuItem } from "@/types/Menu";
import { usePathname } from "next/navigation";

type Props = {
  name: string;
  menu: MenuItem[];
};

function Header({ name, menu }: Props) {
  const pathname = usePathname();

  return (
    <header className={style.header}>
      <div>
        <h1>
          <Link href={"/"}>{name}</Link>{" "}
        </h1>
      </div>
      <div>
        <ul>
          {menu.map(({ Name, Slug }, i) => (
            <li key={i} className={pathname == Slug ? style.active : ""}>
              <Link href={Slug}>{Name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
export default Header;
