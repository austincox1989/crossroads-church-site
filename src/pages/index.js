import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Layout from '../components/layout'
import VideoHero from '../components/video-hero/VideoHero'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'

const IndexPage = (location) => {
  const data = useStaticQuery(pageQuery)
  const { videoBanner, pageContent } = data.allContentfulHomepage.nodes[0]

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    },
    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data
        return (
          <a href={uri} className="underline">
            {children}
          </a>
        )
      },
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{children}</h2>
      },
    },
  }

  const content = renderRichText(pageContent, options)

  return (
    <Layout>
      <VideoHero videoBanner={videoBanner} />
      <div className='page-content'>{content}</div>
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
        pageContent {
          raw
          references {
            id
          }
        }
      }
    }
  }
`
