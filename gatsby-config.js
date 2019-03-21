const path = require("path")

module.exports = {
  pathPrefix: `/mini-gatsbyv2-material-kit-react`,
  siteMetadata: {
    title: "Gatsby Default Starter",
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/assets/img/favicon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        assets: path.join(__dirname, "src/assets"),
        components: path.join(__dirname, "src/components"),
        views: path.join(__dirname, "src/views"),
      },
    },
  ],
}
