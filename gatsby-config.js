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
        fonts: [
          "Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900",
          "Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800",
        ],
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "config",
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-remark`,
    "gatsby-transformer-json",
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
