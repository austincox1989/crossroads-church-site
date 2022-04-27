import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Layout from '../components/layout'
import VideoHero from '../components/video-hero/VideoHero'

const IndexPage = (location) => {
  const data = useStaticQuery(pageQuery)
  const videoBanner = data.allContentfulHomepage.nodes[0].videoBanner

  return (
    <Layout>
      <VideoHero videoBanner={videoBanner} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulHomepage {
      nodes {
        videoBanner {
          ...videoHeroFragment
        }
      }
    }
  }
`
