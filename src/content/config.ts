import { defineCollection, z } from 'astro:content';

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
      id: z.string().optional(),
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
    linkedin: z.string(),
    github: z.string(),
    email: z.string(),
  }),
});

const experience = defineCollection({
  type: 'content',
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

const expertise = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      icon: z.string(),
      text: z.string(),
      order: z.number(),
    }),
  ),
});

const education = defineCollection({
  type: 'data',
  schema: z.array(
    z.object({
      date: z.string(),
      type: z.string(),
      category: z.string(),
      title: z.string(),
      institution: z.string(),
    }),
  ),
});

const about = defineCollection({
  type: 'content',
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
  'site-metadata': siteMetadata,
  section,
  hero,
  'social-links': socialLinks,
  experience,
  expertise,
  education,
  about,
};
