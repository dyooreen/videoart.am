import flow from "@/lib/flow";
import { Member } from "@/types/Member";
import Image from "next/image";
import SocialIcons from "@/app/_components/SocialIcons";
import CvIcon from "@/app/_components/Icons/Cv";
import Project from "@/app/_components/Project";

type Props = {
  params: {
    username: string;
  };
};
export default async function Member({ params }: Props) {
  if (!params.username) return;
  const username = params.username.split("%40")[1];
  const { Name, Photo, CV, SocialLinks, projects, Bio }: Member = (
    await flow(`/members?_Username=${username}`)
  )[0];

  return (
    <>
      <div>
        <div>
          <Image
            src={"https://videoart.am/api" + Photo.url}
            fill
            style={{
              width: "100%",
            }}
            objectFit="cover"
            alt="Member Photo"
          />
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
      <div className="w-3/4 pt-8 m-auto">
        {projects.map((project, i) => (
          <Project {...project} key={i} />
        ))}
      </div>
    </>
  );
}
