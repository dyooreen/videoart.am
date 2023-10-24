import Plyr from "plyr-react";
import "plyr-react/plyr.css";
type Props = {
  Link: string;
};
export default function Video({ Link }: Props) {
  const plyrProps = {
    source: {
      type: "video",
      sources: [
        {
          src: Link,
          provider: "youtube",
        },
      ],
    },
    options: {
      controls: [],
      autoplay: true,
    },
  };
  return <Plyr {...plyrProps} />;
}
