import { getEntry, render } from "astro:content";
import { generateNavigation } from "./navigation";
import type { SiteMetadataContent, PagesMetadataContent, SectionContent, NavigationContent, HeroContent, SocialLinksContent } from "../types";

export const getSiteMetaData = async (): Promise<SiteMetadataContent> => {
  return (await getEntry('site-metadata', 'index')).data.site;
}

export const getPagesMetaData = async (): Promise<PagesMetadataContent> => (
  (await getEntry('site-metadata', 'index')).data.pages
)

const sortCollectionByOrder = (collection: Array<any>) =>{
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
}

export const getSections = async (): Promise<SectionContent[]> => (
  sortCollectionByOrder((await getEntry('section', 'index')).data)
)

export const getNavigation = async (): Promise<NavigationContent[]> => (
  (generateNavigation(await getSections()))
)

export const getHeroContent = async(): Promise<HeroContent> => {
  const heroEntry = await getEntry('hero', 'index')
  const { Content: Bio } = await render(heroEntry)
  return { ...heroEntry.data, Bio }
}

export const getSocialLinks = async (): Promise<SocialLinksContent> => (
  (await getEntry('social-links', 'index')).data
)