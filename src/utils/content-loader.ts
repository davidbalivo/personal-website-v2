import education from '@/content/education/index.json';
import expertise from '@/content/expertise/index.json';
import pagesMetadata from '@/content/metadata/pages/index.json';
import siteMetadata from '@/content/metadata/site/index.json';
import sections from '@/content/sections/index.json';
import socialLinks from '@/content/social-links/index.json';
import type {
  AboutContent,
  EducationContent,
  ExperienceContent,
  ExpertiseContent,
  HeroContent,
  NavigationContent,
  PagesMetadataContent,
  SectionContent,
  SiteMetadataContent,
  SocialLinksContent,
} from '@/types';
import { getCollection, getEntry, render, type DataEntryMap } from 'astro:content';
import { generateNavigation } from './navigation';

type RenderableContentTypes = HeroContent | AboutContent;

const contentNotFoundError = (contentType: string) => new Error(`${contentType} content not found`);

const validateContent = <T>(content: T | null | undefined, contentType: string): T => {
  if (!content) throw contentNotFoundError(contentType);
  return content;
};

const getEntryAndRenderContent = async <T extends RenderableContentTypes>(type: keyof DataEntryMap): Promise<T> => {
  const entry = await getEntry(type, 'index');
  if (!entry) throw new Error(`Entry not found for type "${type}" with id "index"`);
  const { Content: BioComponent } = await render(entry);
  return { ...entry.data, BioComponent } as T;
};

const sortCollectionByOrder = <T extends { order?: number }>(collection: T[]): T[] => {
  const hasOrder = collection.every((item) => 'order' in item);
  if (!hasOrder) {
    return collection;
  }
  return [...collection].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
};

export const getSiteMetaData = (): SiteMetadataContent => validateContent(siteMetadata, 'Site metadata');

export const getPagesMetaData = (): PagesMetadataContent => validateContent(pagesMetadata, 'Pages metadata');

export const getSections = (): SectionContent[] => validateContent(sections, 'Sections');

export const getSocialLinks = (): SocialLinksContent => validateContent(socialLinks, 'Social links');

export const getExpertise = (): ExpertiseContent[] => validateContent(expertise, 'Expertise');

export const getEducation = (): EducationContent[] => validateContent(education, 'Education');

export const getNavigation = async (): Promise<NavigationContent[]> => generateNavigation(await getSections());

export const getHeroContent = async (): Promise<HeroContent> => getEntryAndRenderContent('hero');

export const getAbout = async (): Promise<AboutContent> => getEntryAndRenderContent('about');

export const getExperience = async (): Promise<ExperienceContent[]> =>
  sortCollectionByOrder(
    await Promise.all(
      (await getCollection('experience')).map(async (item) => {
        const { Content: ResponsibilitiesComponent } = await render(item);
        return {
          ...item.data,
          id: item.id,
          ResponsibilitiesComponent,
        };
      }),
    ),
  );
