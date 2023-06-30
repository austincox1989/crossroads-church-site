import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Layout from '../components/layout'
import VideoHero from '../components/video-hero/VideoHero'
import ContentWithImage from '../components/content/ContentWithImage'
import SundayCountdown from '../components/countdown/SundayCountdown'

const IndexPage = (location) => {
  const data = useStaticQuery(pageQuery)
  const { videoBanner, alternatingContentSections } =
    data.allContentfulHomepage.nodes[0]
  const { hash } = location

  return (
    <Layout hash={hash}>
      <VideoHero videoBanner={videoBanner} />
      <section className="wrapper">
        <ContentWithImage
          alternatingContentSections={alternatingContentSections}
        />
      </section>
      <SundayCountdown />
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
      }
    }
  }
`
