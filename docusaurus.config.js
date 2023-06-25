// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TF2SR Wiki',
  tagline: 'A really good™ resource',
  favicon: 'img/tf2sr-icon.png',

  // Production URL
  url: 'https://tf2sr.github.io',
  baseUrl: '/TF2SR-Wiki',

  // GitHub pages deployment config.
  organizationName: 'TF2SR',
  projectName: 'TF2SR-Wiki',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  customFields: {
    discordUrl: 'https://discordapp.com/invite/P3JKjfx4uZ',
    githubUrl: 'https://github.com/TF2SR/TF2SR-Wiki',
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/TF2SR/TF2SR-Wiki/blob/main/',

          admonitions: {
            keywords: ['note', 'tip', 'info', 'caution', 'danger', 'diffe', 'diffm', 'diffh'],
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'TF2SR Wiki',
        logo: {
          src: 'img/tf2sr-icon.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorials',
          },
          {
            type: 'docSidebar',
            sidebarId: 'knowledgebaseSidebar',
            position: 'left',
            label: 'Knowledge Base'
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/P3JKjfx4uZ',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/TF2SR/TF2SR-Wiki',
              },
            ],
          },
        ],
        copyright: `Made with 🧡 (and Docusaurus) by the TF2SR Community`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
