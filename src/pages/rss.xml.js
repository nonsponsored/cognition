import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get(context) {
    return rss({
        title: 'Cognition',
        description: 'A starter theme for Astro.',
        site: context.site,
        items: await pagesGlobToRssItems(
            import.meta.glob('./articles/**/*.mdx'),
        ),
        customData: `<language>en-us</language>`
    });
}