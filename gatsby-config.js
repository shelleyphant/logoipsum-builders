/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `/`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        'gatsby-plugin-postcss',
        // 'gatsby-plugin-google-gtag',
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /src\/images/,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
    ],
}
