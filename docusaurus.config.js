const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'relworx payment',
  tagline: 'relworx payment',
  favicon: 'img/favicon.png',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  organizationName: 'Relworx', // Usually your GitHub org/user name.
  projectName: 'relworx payment API doc', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath:'/',
        },     
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
      
        title: '',
        logo: {
          alt: 'Relworx Logo',
          src: '/img/logo.png',
        },
        items: [
          // nav link here
        ],
      },

      footer: {
        style: 'dark',
        // logo: {
        //   alt: 'Relworx Logo',
        //   src: '/img/logo.png',
        // },
        links: [
          {
            title: 'About',
            items: [
              {
                label: 'Back to Relworx payment',
                href: 'https://payments.relworx.com/',
              },
            ],
          },
          {
            title: 'Quick links',
            items: [
              {
                label: 'Sign Up',
                href: 'https://payments.relworx.com/accounts/new',
              },
              {
                label: 'Sign In',
                href: 'https://payments.relworx.com/users/sign_in',
              },
           
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Create a business account',
                href: 'https://payments.relworx.com/business_accounts/new',
              },
              {
                label: 'Generate your API Key',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Relworx payment.`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
