import flow from "@/lib/flow";
import { Member } from "@/types/Member";
import Image from "next/image";
import style from "./style.module.css";
import SocialIcons from "@/app/_components/SocialIcons";
import CvIcon from "@/app/_components/Icons/Cv";

type Props = {
  params: {
    Username: string;
  };
};
export default async function Member({ params }: Props) {
  const { Name, Photo, CV, SocialLinks, projects, Bio }: Member = (
    await flow(`/members?_Username=${params.Username}`)
  )[0];
  return (
    <div className={style.member}>
      <div>
        <div>
          <Image
            src={"https://videoart.am/api" + Photo.url}
            width={300}
            height={300}
            alt="Member Photo"
          />
        </div>
      </div>
      <div>
        <div>
          <div>
            <h2>{Name}</h2>
            <span>|</span>
            <SocialIcons items={SocialLinks} />
            <span>|</span>
          </div>
          <div>
            {CV && (
              <a href={`https://videoart.am/api${CV.url}`}>
                <CvIcon />
              </a>
            )}
          </div>
        </div>
        <p>{Bio}</p>
      </div>
    </div>
  );
}
