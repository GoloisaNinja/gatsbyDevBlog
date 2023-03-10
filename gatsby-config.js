require("dotenv").config({ path: ".env" });

module.exports = {
  siteMetadata: {
    title: `Jcodes Dev Blog`,
    description: `Jon Collins Software Developer Blog, detailing the various misdeeds of a errant programmer.`,
    author: `@goloisaninja`,
  },
  plugins: [
    "gatsby-optional-chaining",
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          "inter:200",
          "inter:300",
          "inter:400",
          "inter:500",
          "inter:600",
          "inter:700",
          "inter:800",
          "inter:900",
          "prompt:200",
          "prompt:300",
          "prompt:400",
          "prompt:500",
          "prompt:600",
          "prompt:700",
          "prompt:800",
          "prompt:900",
        ],
        display: "swap",
      },
    },
    `gatsby-plugin-react-helmet`,
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `tech`,
        path: `${__dirname}/src/images/tech`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.GATSBY_STRAPI_RAILWAY || "http://127.0.0.1:1337",
        collectionTypes: [
          // List of the Content Types you want to be able to request from Gatsby.
          "article",
          "user",
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/smallLogo2.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
};
