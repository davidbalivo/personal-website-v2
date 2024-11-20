import type { Section } from '../types'

export const generateNavigation = (sections: Section[]) => {
  return sections.map((section) => ({
    title: section.title,
    label: section.title,
    url: `#${section.id}`,
  }));
};