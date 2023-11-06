import Specialist from "@/app/_components/Specialist";
import fullPath from "@/lib/host";

export default async function About({ params: { lang } }: any) {
  const members = await (
    await fetch(fullPath("https://videoart.am/api/members?_locale=" + lang))
  ).json();
  console.log(members);
  return (
    <div className="flex w-10/12 m-auto">
      {members.map((member: any, i: number) => (
        <Specialist {...member} key={i} />
      ))}
    </div>
  );
}
