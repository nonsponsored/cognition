import rss from '@astrojs/rss';

export const get = () => rss({
    title: 'Cognition',
    description: 'A starter theme for Astro.',
    site: import.meta.env.SITE,
    items: import.meta.glob('./articles/**/*.md'),
    customData: `<language>en-us</language>`
  });