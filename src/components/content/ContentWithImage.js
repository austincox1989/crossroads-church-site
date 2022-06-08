import React from 'react'
import { graphql } from 'gatsby'
import RichTextRenderer from './RichTextRenderer'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './content.module.scss'

const ContentWithImage = ({ alternatingContentSections }) => {
  return alternatingContentSections.map(({ content, image, id }, i) => {
    const gatsbyImage = getImage(image)
    let oddOrEven
    if (i % 2) {
      oddOrEven = 'even'
    } else {
      oddOrEven = 'odd'
    }
    return (
      <div key={id} className={`container alternating-content ${oddOrEven}`}>
        <RichTextRenderer
          richText={content}
          className="alternating-content--content"
        />
        <GatsbyImage
          image={gatsbyImage}
          className="alternating-content--image"
        />
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
