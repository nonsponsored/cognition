---
layout: '@layouts/BaseLayout.astro'
setup: |
  import PageHeader from '@components/PageHeader.astro'
  import Card from '@components/Card.astro'
title: 'Guides & Demos'
---

<PageHeader pageTitle={frontmatter.title} />

<div class="text-block" style="--max-width-content: 1360px;">

<p class="text-6">On this page:</p>

- [Variables](#variables)
- [Layouts](#layout-base)
- [Containers](#container-grid)
- [Components](#component-author-articles)
- [RSS](#rss)

---

### Variables
- Variables are managed in `/src/styles/_variables.scss`.
- Variables can be overwritten in the files, within a component, or on containers like the `.text-block` controlling the content on this page.

```astro
/* Colors */
:root {
    --color-darkest: #000;
    --color-lightest: #fff;
    --color-accent: #008A03;
    --color-warning: #b3001b;

    --color-body-background: #fcfcfc;
    --color-border: rgba(31, 31, 31, 0.15);

    --color-header-background: #f3f3f3;
    --color-header-border: var(--color-border);

    --color-primary-nav-link: #313131;
    --color-primary-nav-hover: #313131;

    --color-primary-link: #02339E; 

    --color-primary-headers: #30343F;
    --color-primary-text: #313131;

    /* Border Radius */
    --global-border-radius: 15px;

    /* Easing */
    --global-easing: ease-in-out;

    /* For font sizing */
    --min-viewport: 20; // 320px
    --max-viewport: 90; // 1440px

    /* Heights */
    --global-header-height: 60px;

    /* Spacing */
    --global-side-space: 20px;
    --global-vertical-space: 50px;

    /* Widths */
    --max-width-article: 80ch;
    --max-width-content: 1440px;
    --max-width-media: 1280px;
}
```

---
---

### Layout: Base
- Default layout used for non-Article pages.

### Layout: Article
- Layout used for Articles.

### Layout: Launch
- Unique layout specific to the `Launch` component.

---
---

### Container: Grid
- Generic container for grid layouts.
- Configuration Option: `grid--card` for rendering the `Card` component.
- Configuration Option: `grid--author` for rendering the `AuthorCard` component.

```astro
<!-- Author Grid -->
<div class="grid grid--author"></div>

<!-- Card Grid -->
<div class="grid grid--card"></div>
```

### Container: Text Block
- Generic container for managing the width of text content.
- Width is controlled by the global variable `--max-width-content`.

```astro
<div class="text-block"></div>
```

---
---

### Component: Author Articles
- Pass in `articles` and `slug` to display the article link, title, and publish date.
- Renders all the articles an author has written.
- Articles are sorted by most recent.

```astro
<div class="author-articles">
    <h2 class="text-5">Articles:</h2>

    <ul>
    {articles.map(article =>
        (article.frontmatter.authorSlug === slug)
            &&
        <li>
            <a href={article.url}>{article.frontmatter.title}</a>
            <span>{article.frontmatter.pubDate}</span>
        </li>
    )}
    </ul>
</div>
```

### Component: Author Card
- To generate a grid of each Author (sorted alphabetically by first name) who has written and article, just add the component to a page. 
- To create a single Author Care, pass in `author, `authorSlug`, and `authorAvatar`.

```astro
<!-- Automatically Generated -->
<AuthorCard  />

<!-- Single -->
<AuthorCard author="Author Name" authorSlug="#" authorAvatar="/img/generic/poster-dark.png" />
```

### Component: Articles Tout
- Displays the 3 most recent articles.
- Pass in `numberOfArticles` to change how many articles are shown.

```astro
<!-- Default -->
<ArticlesTout />

<!-- Defin -->
<ArticlesTout numberOfArticles="6" />
```

### Component: Card
- Pass in Frontmatter data to display article link, image, title, author name, author link, and publish date.
- Use within `grid` with the `grid--card` option, but can be extended to other intances by managing the `width`.
- Flexible enough to be used with other data sources or hard-coded, in addtion to with/without image and with/without author data.

```astro
<Card
    link={post.url}
    image={post.frontmatter.imageHero}
    imageAlt={post.frontmatter.imageHeroAlt}
    title={post.frontmatter.title}
    author={post.frontmatter.author}
    authorSlug={post.frontmatter.authorSlug}
    pubDate={post.frontmatter.pubDate}
/>
```


### Component: CTA Link
- Appears at the bottom of each Articles.
- Pass in `link` and `linkText` to use for other instances.

```astro
<CTALink link="/articles/" linkText="See More Articles" />
```

### Component: Document Head
- Defines the `head` information of pages.
- Open Graph information can be defined globally, or overwritten at the page level.
- **WARNING:** Do not update to Beta 28, as it breaks this CSS handling.
- Shared, core styles are imported into `/src/styles/global.scss`.
- `meta.env.MODE` is used to define a separate path for the build process, to allow Hot Module Reloading to work. This approach of managing the file via SASS as a public asset, prevents it from being bundled with component CSS and allows the browser to cache it. 

```astro
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="description" content={ogDescription}>
<meta data-hid="og:title" property="og:title" content={ogTitle}>
<meta data-hid="og:image" property="og:image" content={ogImage}>
<meta data-hid="og:description" property="og:description" content={ogDescription}>
<meta data-hid="twitter:title" name="twitter:title" content={ogTitle}>
<meta data-hid="twitter:image" name="twitter:image" content={ogImage}>
<meta data-hid="twitter:description" name="twitter:description" content={ogDescription}>
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/img/global/apple-touch-icon.png">
<link rel="stylesheet" href={import.meta.env.MODE === 'development' ? '/src/styles/global.scss' : '/css/global.css'}/>
<title>{siteName}{pageTitle && ' : ' + pageTitle}</title>
```

### Component: Image
- Renders an image, with optional caption.
- Configuration Option: `imageWidth="natural"` renders the image at its actual width.
- Configuration Option: `imageWidth="medium"` renders the image at a width slightly larger than the defined `--max-width-article` variable.
- Configuration Option: `imageWidth="narrow"` renders the image at the width of the defined `--max-width-article` variable.
- Flexible enough to be used with other data sources or hard-coded.

```astro
<Image imageWidth="natural" imageSrc={frontmatter.imageHero} imageAlt={frontmatter.imageHeroAlt} caption="Optional image caption." />
```

### Component: Launch
- Superflous component built for the May 2022 Astro Hackathon.
- Renders a rocket animation and page effect that pulls into view the unique page content, such as promotional content.
- Used specifically with the layout `LaunchLayout`, to accommodate specific structural changes.
- Configuration Option: `launchEffect="launch--pull`.
- Configuration Option: `launchEffect="launch--stretch`.
- Configuration Option: `launchColorStart` to define the start color for the gradient and the primary color of the rocket. To define a unique primary color for the rocket, update `--rocket-primary-color`.
- Configuration Option: `launchColorEnd` to define the end color for the gradient and the secondary color of the rocket. To define a unique secondary color for the rocket, update `--rocket-secondary-color`.
- Note that the configuration options are defined on `LaunchLayout` and passed into the `Launch` component, as `launchColorEnd` needs to be passed into the `body` tag.

```astro
<!-- Launch Layout -->
<LaunchLayout launchEffect="launch--stretch" launchColorStart='#ff5d01' launchColorEnd='#31274a'>

<!-- Launch Component -->
<Launch launchEffect={launchEffect} launchColorStart={launchColorStart} launchColorEnd={launchColorEnd}/>
```

### Component: Page Header
- Renders the header of the page.
- No `headerType` is the defualt for all pages.
- Configuration Option: `headerType="article"` to render specifica data on an Artile page.
- Configuration Option: `headerType="author"` to render specifica daata on an Author page.
- See example code for data that can be passed in based on instance.

```astro
<!-- Basic Header -->
<PageHeader pageTitle="Guides" />

<!-- Article Header -->
<PageHeader headerType="article" pageTitle={content.title} pubDate={content.pubDate} author={content.author} authorSlug={content.authorSlug} />

<!-- Author Header -->
<PageHeader headerType="author" pageTitle={pageTitle} authorAvatar={article.frontmatter.authorAvatar}/>
```

### Component: Pagination
- Will automatically appear on the Articles page, once more than 15 Articles are available.

```astro
<Pagination page={page} />
```

### Component: Video
- Pass in `actionColor` (used to define the background color of the play and close buttons), `iframeSrc`, `videoTitle`, `poster` (image should be same aspect ratio as video), and `posterAlt`.
- Renders an embedded video from Twitch, YouTube, or Vimeo.
- 16:9 aspect ratio is expected. 
- Can be easily extended to support other URL structures if needed.

```astro
<Video
    actionColor="var(--color-accent)"
    iframeSrc="https://www.youtube-nocookie.com/embed/dsTXcSeAZq8"
    videoTitle="Astro in 100 Seconds"
    poster="/img/generic/poster-dark.png"
    posterAlt="Astro Logo"
/>
```

---
---

### RSS
- Note that `@astrojs/rss 0.2.0` doesn't seem to recognize the site defined in `astro.config.mjs`, so site URL needs to be defined in `rss.xml.js` for now.

---
---


<p class="text-6">Other Guides & Demos:</p>

<ul>
    <li><a href="cards/">Cards</a></li>
    <li><a href="launch-pull/">Launch : Pull</a></li>
    <li><a href="launch-stretch/">Launch : Stretch</a></li>
    <li><a href="typography/">Typography</a></li>
    <li><a href="video/">Video</a></li>
</ul>
</div>
