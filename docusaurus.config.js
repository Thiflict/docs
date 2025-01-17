// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

let mainInfoLabel = 'Основная информация';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Документация',
  tagline: 'основная информация, полезные туториалы и всё, что может понадобиться для лучшего понимания игрового процесса ElectroPlay',
  url: 'https://epserv.wiki/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'epserv-ru', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false,

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
    localeConfigs: {
      ru: {
        htmlLang: 'ru',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/epserv-ru/docs/tree/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/epserv-ru/docs/tree/main/',
        // },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Документация',
        logo: {
          alt: 'EP',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: mainInfoLabel,
          },
          // {to: '/blog', label: 'Блог', position: 'left'},
          {
            href: 'https://github.com/epserv-ru/docs',
            label: 'Редактировать на GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Документация',
            items: [
              {
                label: mainInfoLabel,
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Ссылки',
            items: [
              {
                label: 'Наш сайт',
                href: 'https://epserv.ru/',
              },
              {
                label: 'ВК',
                href: 'https://vk.com/epsrv',
              },
              {
                label: 'Discord',
                href: 'https://epserv.ru/discord/',
              },
            ],
          },
          {
            title: 'Другое',
            items: [
              // {
              //   label: 'Блог',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/epserv-ru/docs',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} ElectroPlay`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      }
    }),
};

module.exports = config;
