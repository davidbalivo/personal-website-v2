import type { SectionContent } from '../types'

export const generateNavigation = (sections: SectionContent[]) => {
  return sections
    .filter((section) => section.display.showInNav)
    .sort((a, b) => a.order - b.order)
    .map((section) => ({
      title: section.title,
      label: section.title,
      url: `#${section.id}`,
    }));
};
