import Services from "@/app/_components/Services";
import fullPath from "@/lib/host";

export default async function OurService({ params: { lang } }: any) {
  const PService = await (
    await fetch(fullPath(`/home?_locale=${lang}`), {
      cache: "force-cache",
    })
  ).json();
  PService["OurServices"]["Headline"] = null;
  return (
    <div className="mt-28">
      {PService["OurServices"] && <Services data={PService["OurServices"]} />}
    </div>
  );
}
