import ContactUs from "@/app/_components/ContactUs";

export default async function Contact({ params: { lang } }: any) {
  const home = await (
    await fetch(`https://videoart.am/api/home?_locale=${lang}`, {
      cache: "force-cache",
    })
  ).json();

  return (
    <div>{home["ContactUs"] && <ContactUs data={home["ContactUs"]} />}</div>
  );
}
