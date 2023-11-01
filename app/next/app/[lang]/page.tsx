import Headline from "../_components/Headline";
import PartnerCarousel from "../_components/PartnerCarousel";
import Reel from "../_components/Reel";
import Services from "../_components/Services";
export default async function Home({ params: { lang } }: any) {
  const home = await (
    await fetch(`https://videoart.am/api/home?_locale=${lang}`, {
      cache: "force-cache",
    })
  ).json();

  return (
    <div>
      {home["Headline"] && <Headline {...home["Headline"]} />}
      {home["Partners"] && <PartnerCarousel Partners={home["Partners"]} />}
      {home["DemoReel"] && <Reel data={home["DemoReel"]} />}
      {home["OurServices"] && <Services data={home["OurServices"]} />}
    </div>
  );
}
