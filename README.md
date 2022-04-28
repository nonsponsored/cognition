## Cognition

Starter theme for Astro (https://astro.build/), using no other frameworks, and currently including:

- Accessible, extensible, and responsive navigation system, with optional dropdown system.
- Fluid typography system that uses the 1.333 Perfect Fourth scale ratio and the Manrope (https://manropefont.com) variable font.
- Globally defined meta information, which can be overridden at the page level.
- Template files for `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, and `share-image.jpg` (for social sharing).
- Card component flexible enough for blog or product content.
- Basic Page Header component.
- Generic Rich Text Editor container, that can also be used as a component.
- Video component for displaying Twitch, YouTube, and Vimeo videos.
- Superfluous, yet fun, Announcement component with rocket launch.
- Animations that respect reduced-motion preferences.


### Demo Site
https://cognition-theme.netlify.app/

### Browser Support

- Tested in desktop and iOS Chrome, Edge, Firefox, and Safari.

### CSS Architecture

It's opinionated, but opinions based on experience. 👍

Shared styles are imported into `/src/styles/global.scss`. This file is managed via SASS as a public asset, prevnting it from being bundled with component CSS and allowing the browser to cache it.

Deploy Note: Use `yarn build` or `yarn scss & astro build` as the Build Command. 

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
