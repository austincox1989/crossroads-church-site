import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Layout from '../components/layout'
import VideoHero from '../components/video-hero/VideoHero'
import RichTextRenderer from '../components/content/RichTextRenderer'
import ContentWithImage from '../components/content/ContentWithImage'

const IndexPage = (location) => {
  const data = useStaticQuery(pageQuery)
  const { videoBanner, pageContent, alternatingContentSections } =
    data.allContentfulHomepage.nodes[0]
  const { hash } = location

  return (
    <Layout hash={hash}>
      <VideoHero videoBanner={videoBanner} />
      <section className="wrapper">
        <ContentWithImage
          alternatingContentSections={alternatingContentSections}
        />
        <RichTextRenderer richText={pageContent} />
      </section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulHomepage {
      nodes {
        videoBanner {
          ...VideoHeroFragment
        }
        alternatingContentSections {
          ...ContentWithImageFragment
        }
        pageContent {
          raw
          references {
            ... on ContentfulButton {
              contentful_id
              __typename
              ...Button
            }
          }
        }
      }
    }
  }
`
