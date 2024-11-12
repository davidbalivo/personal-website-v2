import { z, defineCollection } from 'astro:content';

const navigation = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    label: z.string(),
    url: z.string(),
    order: z.number(),
  })
});

const hero = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    linkedin: z.string().url(),
    github: z.string().url(),
    email: z.string().url(),
    image: z.string(),
  })
})

export const collections = {
  navigation,
  hero,
};
