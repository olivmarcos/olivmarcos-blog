module.exports = {
    plugins: [{
            resolve: `gatsby-theme-blog`,
            options: {},
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
        title: `Marcos Oliveira`,
        author: `Marcos Oliveira`,
        description: `Uma forma de fixar o meu conhecimento e ajudar a outros que estão entrando nessa carreira de desenvolvedor e se sente tão frustrado quanto eu.`,
        social: [{
                name: `twitter`,
                url: `https://twitter.com/_olivmarcos`,
            },
            {
                name: `github`,
                url: `https://github.com/olivmarcos`,
            },
            {
                name: 'instagram',
                url: 'https://www.instagram.com/_olivmarcos/'
            }
        ],
    },
}