import ContactUs from "@/app/_components/ContactUs";
import fullPath from "@/lib/host";

export default async function Contact({ params: { lang } }: any) {
  const home = await (
    await fetch(fullPath(`/home?_locale=${lang}`), {
      cache: "force-cache",
    })
  ).json();

  return (
    <div>{home["ContactUs"] && <ContactUs data={home["ContactUs"]} />}</div>
  );
}
