import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SimpleHero from '../components/simple-hero/SimpleHero'
import ContentWithImage from '../components/content/ContentWithImage'
import RichTextRenderer from '../components/content/RichTextRenderer'
import BasicContent from '../components/content/BasicContent'

const GenericInterior = ({ data, location }) => {
  const { basicContent, alternatingContentSection, banner, additionalPageContent } =
    data.allContentfulGenericInteriorPage.nodes[0]
  const { hash } = location

  return (
    <Layout hash={hash}>
      <SimpleHero banner={banner} />
      <section className="wrapper">
        {basicContent && (
          <BasicContent
            content={basicContent}
          />
        )}
        {alternatingContentSection && (
          <ContentWithImage
            alternatingContentSections={alternatingContentSection}
          />
        )}
        {additionalPageContent && (
          <section className="container">
            <RichTextRenderer
              richText={additionalPageContent}
              className="additional-content"
            />
          </section>
        )}
      </section>
    </Layout>
  )
}

export default GenericInterior

export const pageQuery = graphql`
  query GenericInteriorQuery($slug: String!) {
    allContentfulGenericInteriorPage(filter: { slug: { eq: $slug } }) {
      nodes {
        banner {
          ...SimpleHeroFragment
        }
        basicContent {
          ...BasicContentFragment
        }
        alternatingContentSection {
          ...ContentWithImageFragment
        }
        additionalPageContent {
          raw
          references {
            ... on ContentfulEntry {
              ... on ContentfulVideoEmbed {
                __typename
                contentful_id
                embedCode {
                  embedCode
                }
              }
              ... on ContentfulButton {
                contentful_id
                __typename
                ...Button
              }
              ... on ContentfulButtonGroup {
                contentful_id
                __typename
                ...ButtonGroupFragment
              }
            }
          }
        }
        slug
      }
    }
  }
`
