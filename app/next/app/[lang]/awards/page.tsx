import Award from "@/app/_components/Award";

export default async function Awards({ params: { lang } }: any) {
  const awards = await (
    await fetch("https://videoart.am/api/awards?_locale=" + lang)
  ).json();
  return (
    <div>
      {awards.map((award: any, i: number) => {
        award["i"] = i;
        return <Award {...award} key={i} />;
      })}
    </div>
  );
}
