import { getSections } from "./content-loader";
import Hero from '../components/main/Hero.astro'
import About from '../components/main/About.astro'
import Footer from '../components/footer/index.astro'
import Experience from '../components/main/Experience.astro';
import Education from '../components/main/Education.astro';
import Expertise from '../components/main/Expertise.astro';
import type { Section } from "../types";

const COMPONENT_MAP = {
  Hero,
  Experience,
  Expertise,
  Education,
  About,
  Footer,
} as const;

interface PageSection {
  section: Section;
  Component: typeof COMPONENT_MAP[keyof typeof COMPONENT_MAP] | null;
}

const isValidComponent = (component: string): component is keyof typeof COMPONENT_MAP => {
  return component in COMPONENT_MAP;
};

export const getPageMainSections = async (): Promise<PageSection[]> => {
  const sections: Section[] = await getSections();

  return sections.map((section) => {
    const Component = isValidComponent(section.component) ? COMPONENT_MAP[section.component] : null;
    return {
      section,
      Component,
    }
  })
}