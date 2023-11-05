"use client"
import Plyr from "plyr-react";
import "plyr-react/plyr.css";
type Props = {
  Link: string;
  Options?: any;
};
export default function Video({ Link, Options }: Props) {
  const plyrProps: any = {
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
      ...Options,
    },
  };
  return <Plyr {...plyrProps} />;
}
