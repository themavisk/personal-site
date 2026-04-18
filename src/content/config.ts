import { defineCollection, z } from 'astro:content';

const essays = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    draft: z.boolean().default(false),
    heroImage: image().optional(),
  }),
});

const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    yearRead: z.number(),
    rating: z.number().min(1).max(5).optional(),
    fullEssay: z.string().optional(),
  }),
});

const collectionsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    essays: z.array(z.string()),
  }),
});

export const collections = { essays, books, collections: collectionsCollection };
