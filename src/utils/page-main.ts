import { getSections } from './content-loader';
import Hero from '@/components/main/Hero.astro';
import About from '@/components/main/About.astro';
import Footer from '@/components/footer/index.astro';
import Experience from '@/components/main/Experience.astro';
import Education from '@/components/main/Education.astro';
import Expertise from '@/components/main/Expertise.astro';
import type { SectionContent, PageSectionContent } from '../types';

const COMPONENT_MAP = {
  Hero,
  Experience,
  Expertise,
  Education,
  About,
  Footer,
} as const;

const isValidComponent = (component: string): component is keyof typeof COMPONENT_MAP => {
  return component in COMPONENT_MAP;
};

export const getPageMainSections = async (): Promise<PageSectionContent[]> => {
  const sections: SectionContent[] = await getSections();

  return sections.map((section) => {
    const Component = isValidComponent(section.component) ? COMPONENT_MAP[section.component] : null;
    return {
      section,
      Component,
    };
  });
};
