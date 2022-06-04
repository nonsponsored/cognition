## Cognition

### Status
Sizable and extensive rework from the initial release, much more of an out-of-the-box starter now.

### What It Is
Starter theme for Astro (https://astro.build/) that's more than a blog, and uses no other frameworks.

- Accessible, extensible, and responsive navigation system, with optional dropdown system.
- Fluid typography system that uses the Manrope (https://manropefont.com) variable font.
- Globally defined meta information, which can be overridden at the page level.
- Animations that respect reduced-motion preferences.
- Template files for `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, and `share-image.png` (for social sharing).
- See the Guides & Demos for details about components: https://cognition-theme.netlify.app/guides-and-demos/

### Demo Site
https://cognition-theme.netlify.app/

### Browser Support

- Tested in desktop and iOS Chrome, Edge, Firefox, and Safari.

### CSS Architecture

It's opinionated, but opinions based on experience. 👍

Shared styles are imported into `/src/styles/global.scss`. This file is managed via SASS as a public asset, prevnting it from being bundled with component CSS and allowing the browser to cache it.

Deploy Note: Use `yarn build` or `yarn scss & astro build` as the Build Command. 

### Images

Note that Card images are based on 16:9 ratio, and Author images are based on 1:1 ratio of 225x225.

### Typography

In `/src/styles/_variables.scss`, define the `--min-viewport` and `--max-viewport` variables, currently set to `320` and `1440`. This is the range within the font will scale. Font sizes are then defined with `--min-font-size` and `--max-font-size`.

### File Structure

```
/
├── public/
│   ├── css/
│   ├── fonts/
│   ├── img/
│   │   └── generic
│   │   └── global
│   │   └── social
│   │   └── ui
│   └── favicon.ico
│   └── favicon.svg
│   ├── robots.txt
├── src/
│   ├── components/
│   │   └── *.astro
│   ├── js/
│   │   └── *.js
│   ├── layouts/
│   │   └── *.astro
│   ├── pages/
│   │   └── *.astro
│   └── styles/
│       └── *.scss
└── package.json
```

| Command        | Action                                      |
| :------------- | :------------------------------------------ |
| `yarn install` | Installs dependencies                       |
| `yarn dev`     | Starts local dev server at `localhost:3000` |
| `yarn build`   | Build your production site to `./dist/`     |

### Known Issues
- Announcement scroll effect jitters on Chrome some, if you scroll too fast or change direction fast. This despite using hardware acceleration and throttling.

### What Comes Next...Ideally
- Dynamically generated navigation