import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

export interface SiteMetadataContent {
  defaultLanguage: string;
  author: string;
  domain: string;
}

export interface PagesMetadataContent {
  [key: string]: {
    title: string;
    description: string;
  };
}

export interface SectionContent {
  id?: string;
  title: string;
  display: {
    showTitle: boolean;
    showInNav: boolean;
  };
  component: string;
  class?: string;
}

export interface PageSectionContent {
  section: Section;
  Component: AstroComponentFactory | null;
}

export interface NavigationContent {
  title: string;
  label: string;
  url: string;
}

export interface HeroContent {
  name: string;
  title: string;
  image: string;
  BioComponent: AstroComponentFactory;
}

export interface SocialLinksContent {
  linkedin: string;
  github: string;
  email: string;
}

export interface ExperienceContent {
  id: string;
  order: number;
  date: string;
  location: string;
  title: string;
  company: string;
  descriptionShort: string;
  descriptionLong: string;
  stackShort: string[];
  stackLong: string[];
  ResponsibilitiesComponent: AstroComponentFactory;
}

export interface ExpertiseContent {
  icon: string;
  text: string;
}

export interface EducationContent {
  date: string;
  type: string;
  category: string;
  title: string;
  institution: string;
}

export interface AboutContent {
  image: {
    src: string;
    alt: string;
  };
  skills: string[];
  hobbies: {
    icon: string;
  }[];
  BioComponent: AstroComponentFactory;
}
