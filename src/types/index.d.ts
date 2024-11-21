export interface Section {
  id: string;
  title: string;
  display: {
    showTitle: boolean;
    showInNav: boolean;
  },
  component: string;
  order: number;
  class?: string;
}

export interface SocialLink {
  linkedin: string;
  github: string;
  email: string;
}
