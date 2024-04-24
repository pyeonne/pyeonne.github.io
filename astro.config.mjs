import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import starlightBlog from 'starlight-blog';

// https://astro.build/config
export default defineConfig({
  site: 'https://pyeonne.github.io',
  integrations: [
    starlight({
      plugins: [
        starlightBlog({
          title: 'Demo Blog',
          authors: {
            hideoo: {
              name: 'HiDeoo',
              title: 'Starlight Aficionado',
              picture: '/hideoo.png',
              url: 'https://hideoo.dev',
            },
          },
        }),
      ],
      title: 'My Docs',
      customCss: [
        './src/styles/tailwind.css',
        './src/styles/custom.css',
        './src/styles/font.css',
      ],
      social: {
        github: 'https://github.com/pyeonne',
        twitter: 'https://twitter.com/pyeonne',
        linkedin: 'https://www.linkedin.com/in/pyeonne/',
      },
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: 'Example Guide',
              link: '/guides/example/',
            },
          ],
        },
        {
          label: 'Reference',
          autogenerate: {
            directory: 'reference',
          },
        },
      ],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
  ],
});
