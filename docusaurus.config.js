/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Mongo Dash',
  tagline: 'Dashboards for MongoDB',
  url: 'https://mongo-dash-docs.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ismailuddin', // Usually your GitHub org/user name.
  projectName: 'mongo-dash', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Mongo Dash',
      logo: {
        alt: 'Mongo Dash',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'https://mongo-dash.vercel.app/',
          label: 'Website',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/ismailuddin/mongo-dash',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Mongo Dash`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ismailuddin/mongo-dash-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
