import Footer from '@/components/footer/index.astro';
import About from '@/components/main/about/index.astro';
import Education from '@/components/main/Education.astro';
import Experience from '@/components/main/Experience.astro';
import Expertise from '@/components/main/Expertise.astro';
import Hero from '@/components/main/Hero.astro';
import type { PageSectionContent, SectionContent } from '../types';
import { getSections } from './content-loader';

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
