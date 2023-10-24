import { SocialLink } from "./SocialLinks";

export type Member = {
  id: number;
  Name: string;
  Username: string;
  Bio: string;
  locale: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  SocialLinks: Array<SocialLink>;
  CV: any;
  Photo: any;
  projects: any[];
  localizations: string[];
};
