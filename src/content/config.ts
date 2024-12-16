import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const hero = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/hero' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    image: z.string(),
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '*.mdx', base: 'src/content/experience' }),
  schema: z.object({
    order: z.number(),
    date: z.string(),
    location: z.string(),
    title: z.string(),
    company: z.string(),
    descriptionShort: z.string(),
    descriptionLong: z.string(),
    stackShort: z.array(z.string()),
    stackLong: z.array(z.string()),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: '*.md', base: 'src/content/about' }),
  schema: z.object({
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    skills: z.array(z.string()),
    hobbies: z.array(
      z.object({
        icon: z.string(),
      }),
    ),
  }),
});

export const collections = {
  hero,
  experience,
  about,
};
