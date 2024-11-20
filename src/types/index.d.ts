export interface Section {
  id: string;
  title?: string;
  component: string;
  order: number;
  class?: string;
}

export interface SocialLink {
  linkedin: string;
  github: string;
  email: string;
}
