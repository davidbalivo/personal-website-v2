import type { ExperienceContent } from '@/types';
import { getExperience } from './content-loader';

interface ExperiencePath {
  params: { slug: string };
  props: { experience: ExperienceContent };
}

export const getExperiencePaths = async (): Promise<ExperiencePath[]> => {
  const content: ExperienceContent[] = await getExperience();
  return content.map((experience) => ({
    params: { slug: experience.slug },
    props: { experience },
  }));
};

export const parseExperience = async (experience: ExperienceContent) => {
  const { date, title, company, descriptionLong, stackLong, ResponsibilitiesComponent, slug } = experience;

  return {
    date,
    title,
    company,
    descriptionLong,
    stackLong,
    slug,
    ResponsibilitiesComponent,
  };
};
