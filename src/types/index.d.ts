import type { AstroComponentFactory } from "astro/runtime/server/index.js";

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
  Bio: AstroComponentFactory;
}

export interface SocialLinksContent {
  linkedin: string;
  github: string;
  email: string;
}

export interface ExperienceContent {
  order: number;
  date: string;
  titleLong: string;
  titleShort: string;
  company: string;
  descriptionShort: string;
  descriptionLong: string;
  stackShort: string[];
  stackLong: string[];
}