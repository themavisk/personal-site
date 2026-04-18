import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const essays = await getCollection('essays', ({ data }) => !data.draft);
  essays.sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());

  return rss({
    title: 'Vamsi Krishna',
    description: 'Essays on philosophy, consciousness, and the business ecosystem.',
    site: context.site,
    items: essays.map(essay => ({
      title: essay.data.title,
      description: essay.data.description,
      pubDate: essay.data.publishedAt,
      link: `/essays/${essay.slug}/`,
    })),
  });
}
