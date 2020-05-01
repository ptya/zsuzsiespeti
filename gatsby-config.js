const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Zsuzsi & Peti egybekel',
    description: 'Minden, amit tudni lehet Zsuzsi & Peti esküvőjéről :)',
    url: 'https://zsuzsiespetiegybekel.hu',
    image: '/images/share-new-date.jpg',
    author: 'Peter Szabo',
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#382d20`,
        theme_color: `#382d20`,
        display: `minimal-ui`,
        icon: `src/assets/images/favico.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, `src`, `pages`),
        assets: path.join(__dirname, `src`, `assets`),
        components: path.join(__dirname, `src`, `components`),
        utils: path.join(__dirname, `src`, `utils`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
