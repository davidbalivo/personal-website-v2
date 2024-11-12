import { z, defineCollection } from 'astro:content';

const navigationCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    label: z.string(),
    url: z.string(),
    order: z.number(),
  })
});

export const collections = {
  navigation: navigationCollection,
};
