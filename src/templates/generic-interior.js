import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import SimpleHero from '../components/simple-hero/SimpleHero'
import ContentWithImage from '../components/content/ContentWithImage'

const GenericInterior = ({ data, location }) => {
  const { alternatingContentSection, banner, additionalPageContent } =
    data.allContentfulGenericInteriorPage.nodes[0]
  const { hash } = location

  return (
    <Layout hash={hash}>
      <SimpleHero banner={banner} />
      <section className="wrapper">
        <ContentWithImage
          alternatingContentSections={alternatingContentSection}
        />
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
        alternatingContentSection {
          ...ContentWithImageFragment
        }
        additionalPageContent {
          raw
        }
        slug
      }
    }
  }
`
