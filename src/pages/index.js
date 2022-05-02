import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Layout from '../components/layout'
import VideoHero from '../components/video-hero/VideoHero'
import RichTextRenderer from '../components/content/RichTextRenderer'

const IndexPage = (location) => {
  const data = useStaticQuery(pageQuery)
  const { videoBanner, pageContent } = data.allContentfulHomepage.nodes[0]
  const { hash } = location

  return (
    <Layout hash={hash}>
      <VideoHero videoBanner={videoBanner} />
      <RichTextRenderer richText={pageContent} />
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
