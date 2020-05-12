const fs = require("fs")
const file = fs.readFileSync("./content/site.json").toJSON()

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter Simple Tailwind`,
    description: `This is a simple Gatsby starter that uses Tailwind, Typescript, and a few other QOL tools.`,
    author: `@samwightt`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `${file.name}`,
        short_name: `${file.name}`,
        start_url: `/`,
        background_color: `${file.site_theme}`,
        theme_color: `${file.site_theme}`,
        display: `minimal-ui`,
        // Uncomment the line below if you'd like an icon.
        // icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["open sans", "montserrat"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/blog`,
      },
    },
    `gatsby-transformer-remark`,
    // Uncomment the lines below to enable image support.
    // Make sure to add a directory for images.
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
