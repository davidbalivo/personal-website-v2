import { getEntry, getCollection, render, type ContentEntryMap } from 'astro:content';
import { generateNavigation } from './navigation';
import type {
  SiteMetadataContent,
  PagesMetadataContent,
  SectionContent,
  NavigationContent,
  HeroContent,
  SocialLinksContent,
  ExperienceContent,
  ExpertiseContent,
  EducationContent,
  AboutContent,
} from '../types';

export const getSiteMetaData = async (): Promise<SiteMetadataContent> => {
  return (await getEntry('site-metadata', 'index')).data.site;
};

export const getPagesMetaData = async (): Promise<PagesMetadataContent> =>
  (await getEntry('site-metadata', 'index')).data.pages;

const sortCollectionByOrder = (collection: Array<any>) => {
  const fallback = collection;
  try {
    return collection.sort((a, b) => {
      if ('order' in a && 'order' in b) {
        return a.order - b.order;
      }
      return 0;
    });
  } catch {
    return fallback;
  }
};

type RenderableContentTypes = HeroContent | AboutContent;

const getEntryAndRenderContent = async <T extends RenderableContentTypes>(type: keyof ContentEntryMap): Promise<T> => {
  const entry = await getEntry(type, 'index');
  const { Content: Bio } = await render(entry);
  return { ...entry.data, Bio } as T;
};

export const getSections = async (): Promise<SectionContent[]> =>
  sortCollectionByOrder((await getEntry('section', 'index')).data);

export const getNavigation = async (): Promise<NavigationContent[]> => generateNavigation(await getSections());

export const getHeroContent = async (): Promise<HeroContent> => getEntryAndRenderContent('hero');

export const getSocialLinks = async (): Promise<SocialLinksContent> => (await getEntry('social-links', 'index')).data;

export const getExperience = async (): Promise<ExperienceContent[]> =>
  sortCollectionByOrder((await getCollection('experience')).map((item) => item.data));

export const getExpertise = async (): Promise<ExpertiseContent[]> =>
  sortCollectionByOrder((await getEntry('expertise', 'index')).data);

export const getEducation = async (): Promise<EducationContent[]> =>
  sortCollectionByOrder((await getEntry('education', 'index')).data);
export const getAbout = async (): Promise<AboutContent> => getEntryAndRenderContent('about');
