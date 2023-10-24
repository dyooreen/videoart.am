import { Member } from "@/types/Member";
import style from "./style.module.css";
import { PMembers } from "@/types/PMembers";
import MemberCard from "../_components/MemberCard";
import flow from "@/lib/flow";

export default async function Members() {
  const { Title }: PMembers = await flow("/p-members");
  const Members: Member[] = await flow("/members");

  return (
    <>
      <div>
        <h2 className={style.Title}>{Title}</h2>
      </div>
      <div className={style.members}>
        {Members.map((member: Member) => (
          <MemberCard {...member} />
        ))}
      </div>
    </>
  );
}
