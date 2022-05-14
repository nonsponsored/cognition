---
layout: '@layouts/ArticleLayout.astro'
setup: |
  import Image from '@components/Image.astro'
  import Video from '@components/Video.astro'
title: 'Inventing JavaScript in 1995'
description: 'Short description of article goes here.'
pubDate: 'May 12, 2022'
author: 'Brendan Eich'
authorSlug: 'brendan-eich'
authorAvatar: '/img/author/brendan-eich.jpg'
imageHero: '/img/article/poster-js.png'
imageHeroAlt: 'JS Poster'
---


<Image imageWidth="medium" imageSrc={frontmatter.imageHero} imageAlt={frontmatter.imageHeroAlt} />

Lorem ipsum dolor sit amet consectetur adipiscing elit nisl eu tortor nec rhoncus purus tempor integer natoque, morbi cursus rutrum mi fringilla egestas ex suscipit maecenas ac urna ultrices habitant risus. Urna eu feugiat congue tempor morbi vestibulum luctus bibendum consequat, fringilla himenaeos volutpat ultrices fames facilisi interdum nullam. Interdum dapibus erat metus tincidunt condimentum ultrices ut a vulputate dolor dictum senectus fames, commodo ipsum magnis consequat penatibus himenaeos lacinia maecenas vivamus tempor augue.

* Fusce vulputate ac ullamcorper
* [Jump to Heading 3](#heading-3)
* Sagittis malesuada porttitor

## Heading 2

Fusce vulputate ac ullamcorper commodo blandit sed habitant duis sapien urna orci purus dis, ipsum inceptos eget proin a morbi maecenas placerat eros laoreet vestibulum nisi. Cras duis ligula aptent ipsum quis volutpat quam consectetur scelerisque nam molestie amet tempus nullam, ante mus justo in nunc felis vel leo pulvinar elit donec torquent.

### Heading 3
Pretium lobortis cras varius nisl proin aliquam est blandit cursus ut, ante maecenas turpis posuere hendrerit quisque ullamcorper ligula id. Congue habitant conubia egestas lorem nec ante turpis pharetra commodo platea rutrum, et montes pellentesque a praesent pulvinar dictumst molestie laoreet massa. Mauris tristique purus ridiculus tempus nisl sociosqu integer maecenas mi nisi taciti, eleifend non consectetur fames venenatis quis adipiscing nulla praesent. Odio class velit justo quisque tempus taciti maximus integer turpis tristique gravida potenti, lobortis tellus mus scelerisque nostra dictum semper risus urna sed ornare.

> Blockquote Hendrerit duis bibendum cras class quis vitae malesuada ad imperdiet hac, montes nunc luctus dignissim semper ultricies iaculis faucibus libero commodo, aptent adipiscing vehicula turpis magnis dapibus rhoncus aenean tortor. 
> <footer>— <a href="https://astro.build">Astro</a></footer>

<Video
    actionColor="#e5a329"
    iframeSrc="https://www.youtube-nocookie.com/embed/dsTXcSeAZq8"
    poster="/img/generic/poster-light.png"
    posterAlt="Astro Logo"
    videoTitle="Astro in 100 Seconds"
/>

#### Heading 4
A odio vulputate ad nascetur aenean non auctor inceptos class dictumst dis per, euismod nulla amet conubia blandit tortor mus parturient luctus porta est:
1. Fusce vulputate ac ullamcorper
2. Pretium lobortis cras
3. Sagittis malesuada porttitor

```astro
<!-- Sample code formatting -->
<button type="button">Fancy Button</button>
```

##### Heading 5
Sagittis malesuada porttitor fringilla diam vulputate curabitur non risus amet tristique interdum, natoque dictum sociosqu quam vestibulum nec egestas turpis orci purus lectus fermentum, eu platea nam dolor justo facilisis nisl ipsum efficitur lacus. Tellus eu in facilisi rutrum lacus conubia fringilla venenatis leo quam curabitur, dolor iaculis torquent integer penatibus egestas nibh odio ultricies nisl tristique, enim eleifend nunc lectus elit sit pretium ad hac ullamcorper. Sed conubia laoreet tellus nunc justo nascetur natoque ante aptent mauris orci magnis, tincidunt augue eu ipsum odio dolor nec volutpat tortor ut.