import { getEntry, render } from "astro:content";
import { generateNavigation } from "./navigation";
import type { SiteMetadata, PagesMetadata, Section, Navigation, HeroContent, SocialLinks } from "../types";

export const getSiteMetaData = async (): Promise<SiteMetadata> => {
  return (await getEntry('site-metadata', 'index')).data.site;
}

export const getPagesMetaData = async (): Promise<PagesMetadata> => (
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

export const getSections = async (): Promise<Section[]> => (
  sortCollectionByOrder((await getEntry('section', 'index')).data)
)

export const getNavigation = async (): Promise<Navigation[]> => (
  (generateNavigation(await getSections()))
)

export const getHeroContent = async(): Promise<HeroContent> => {
  const heroEntry = await getEntry('hero', 'index')
  const { Content: Bio } = await render(heroEntry)
  return { ...heroEntry.data, Bio }
}

export const getSocialLinks = async (): Promise<SocialLinks> => (
  (await getEntry('social-links', 'index')).data
)