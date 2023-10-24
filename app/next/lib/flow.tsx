export default async function flow(endpoint: string) {
  return await (
    await fetch(`https://videoart.am/api${endpoint}`, {
      cache: "no-store",
    })
  ).json();
}
