import fullPath from "./host";

export default async function flow(endpoint: string) {
  return await (
    await fetch(fullPath(endpoint), {
      cache: "no-store",
    })
  ).json();
}
