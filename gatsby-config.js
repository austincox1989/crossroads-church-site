require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken:
    process.env.CONTENTFUL_ACCESS_TOKEN ||
    process.env.CONTENTFUL_DELIVERY_TOKEN,
};

// If you want to use the preview API please define
// CONTENTFUL_HOST and CONTENTFUL_PREVIEW_ACCESS_TOKEN in your
// environment config.
//
// CONTENTFUL_HOST should map to `preview.contentful.com`
// CONTENTFUL_PREVIEW_ACCESS_TOKEN should map to your
// Content Preview API token
//
// For more information around the Preview API check out the documentation at
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
//
// To change back to the normal CDA, remove the CONTENTFUL_HOST variable from your environment.
if (process.env.CONTENTFUL_HOST) {
  contentfulConfig.host = process.env.CONTENTFUL_HOST;
  contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error(
    "Contentful spaceId and the access token need to be provided."
  );
}

module.exports = {
  siteMetadata: {
    title: 'Crossroads Church | Church in Ellsworth, ME',
    description:
      'Crossroads Church is a Christ-centered, Apostolic church serving the people of Ellsworth, Hancock, Trenton and the surrounding areas.',
    siteUrl: `https://www.crossroadschurch.me/`,
  },
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Crossroads Church`,
        short_name: `Crossroads`,
        start_url: `/`,
        background_color: `#006838`,
        theme_color: `#39b54a`,
        display: `browser`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require('sass'),
        cssLoaderOptions: {
          modules: {
            localIdentName: '[local]',
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`montserrat`],
        display: 'swap',
      },
    },
  ],
}
