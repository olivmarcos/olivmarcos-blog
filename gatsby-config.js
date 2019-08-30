module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: `The Frustaded Dev`,
        short_name: `TFD`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#F2AC29`,
        display: `standalone`,
        icon: `content/assets/logo.png`
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-146794336-1",
        head: true,
      },
    },
    `gatsby-plugin-remove-serviceworker`
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `The Frustraded Dev`,
    author: `Marcos Oliveira`,
    description: `Uma forma de fixar o meu conhecimento e ajudar a outros que estão entrando nessa carreira de desenvolvedor e se sente tão frustrado quanto eu.`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/_olivmarcos`,
      },
      {
        name: `github`,
        url: `https://github.com/olivmarcos`,
      },
    ],
  },
}
