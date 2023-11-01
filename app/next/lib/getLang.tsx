export default function go(pathname: string, href: string) {
  if (pathname.split("/")[1] === "" || pathname === "") {
    return "" + href;
  }
  return pathname.split("/")[1] + href;
}
