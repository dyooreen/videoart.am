import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MenuItem } from "@/types/Menu";
import Header from "./_components/Header";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const req = await fetch(`https://videoart.am/api/menus?_sort=Order`, {
    cache: "no-store",
  });
  const menu: Array<MenuItem> = await req.json();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header name="VideoArt" menu={menu} />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
