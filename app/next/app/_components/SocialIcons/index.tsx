import style from "./style.module.css";
import FacebookIcon from "@/app/_components/Icons/Facebook";
import MailIcon from "@/app/_components/Icons/Mail";
import InstagramIcon from "@/app/_components/Icons/Instagram";
import { SocialLink } from "@/types/SocialLinks";
type Props = {
  items: SocialLink[];
};
export default function SocialIcons({ items }: Props) {
  return (
    <div className={style.SocialLinks}>
      {items.map(
        ({ Type, Link }) =>
          (Type === "Facebook" && (
            <a target="_blank" href={Link}>
              <FacebookIcon />
            </a>
          )) ||
          (Type === "Mail" && (
            <a target="_blank" href={`mailto:${Link}`}>
              <MailIcon />
            </a>
          )) ||
          (Type === "Instagram" && (
            <a target="_blank" href={Link}>
              <InstagramIcon />
            </a>
          ))
      )}
    </div>
  );
}
