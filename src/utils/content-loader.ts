import { getCollection, type ContentEntryMap, type DataEntryMap } from "astro:content";
import { generateNavigation } from "./navigation";
import type { Section } from "../types";

export const getSingleEntryCollection = async (collection: keyof ContentEntryMap | keyof DataEntryMap) => {
  const rawCollection: Array<any> = await getCollection(collection);
  return sortCollectionByOrder(rawCollection[0].data);
}

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

export const getNavigation = async () => {
  const sections: Section[] = (await getSingleEntryCollection('section'));
  return generateNavigation(sections);
}