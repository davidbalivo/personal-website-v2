import { z, defineCollection } from 'astro:content';

const siteMetadata = defineCollection({
  type: 'data',
  schema: z.object({
    site: z.object({
      defaultLanguage: z.string().default('en'),
      author: z.string(),
      domain: z.string(),
    }),
    pages: z.record(
      z.string(),
      z.object({
        title: z.string(),
        description: z.string(),
      }),
    ),
  }),
});

const section = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      id: z.string(),
      title: z.string(),
      display: z.object({
        showTitle: z.boolean(),
        showInNav: z.boolean(),
      }),
      component: z.string(),
      order: z.number(),
      class: z.string().optional(),
    }),
  ),
});

const hero = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    image: z.string(),
  }),
});

const socialLinks = defineCollection({
  type: 'data',
  schema: z.object({
    linkedin: z.string().url(),
    github: z.string().url(),
    email: z.string().url(),
  }),
});

const experience = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    date: z.string(),
    titleShort: z.string().optional(),
    titleLong: z.string(),
    company: z.string(),
    descriptionShort: z.string(),
    descriptionLong: z.string(),
    stackShort: z.array(z.string()),
    stackLong: z.array(z.string()),
  }),
});

const expertise = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      src: z.string(),
      alt: z.string(),
      text: z.string(),
    }),
  ),
});

const education = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      date: z.string(),
      type: z.string(),
      title: z.string(),
      institution: z.string(),
    }),
  ),
});

const about = defineCollection({
  type: 'content',
  schema: z.object({
    image: z.string(),
    skills: z.array(z.string()),
    hobbies: z.array(
      z.object({
        img: z.string(),
        alt: z.string(),
      }),
    ),
  }),
});

export const collections = {
  'site-metadata': siteMetadata,
  section,
  hero,
  'social-links': socialLinks,
  experience,
  expertise,
  education,
  about,
};
