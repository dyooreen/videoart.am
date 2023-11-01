"use client";
import { usePathname, useRouter } from "next/navigation";

export default function LangBtn({ langs }: any) {
  const { push } = useRouter();
  const pathname = usePathname();

  return (
    <select
      onChange={(e) => {
        push(e.target.value);
      }}
      className="text-lg bg-transparent p-2 uppercase"
      value={"/" + pathname.split("/")[1]}
    >
      {langs.map((item: any, i: number) => (
        <option key={i} value={"/" + item.code}>
          {item.code}
        </option>
      ))}
    </select>
  );
}
