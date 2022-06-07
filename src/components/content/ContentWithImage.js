import React from 'react'
import { graphql } from 'gatsby'
import RichTextRenderer from './RichTextRenderer'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './content.module.scss'

const ContentWithImage = ({ alternatingContentSections }) => {
  return alternatingContentSections.map(({ content, image, id }) => {
    const gatsbyImage = getImage(image)
    return (
      <div key={id} className="container alternating-content">
        <RichTextRenderer richText={content} />
        <GatsbyImage image={gatsbyImage} />
      </div>
    )
  })
}

export default ContentWithImage

export const query = graphql`
  fragment ContentWithImageFragment on ContentfulContentWithImage {
    id
    content {
      raw
    }
    image {
      gatsbyImageData
    }
  }
`
