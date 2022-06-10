import React from 'react'
import { graphql } from 'gatsby'
import RichTextRenderer from './RichTextRenderer'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import './content.module.scss'

const ContentWithImage = ({ alternatingContentSections }) => {
  return alternatingContentSections.map(
    ({ heading, content, image, id }, i) => {
      const gatsbyImage = getImage(image)
      let oddOrEven
      if (i % 2) {
        oddOrEven = 'even'
      } else {
        oddOrEven = 'odd'
      }
      return (
        <div key={id} className={`container alternating-content ${oddOrEven}`}>
          <h2>{heading}</h2>
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
    }
  )
}

export default ContentWithImage

export const query = graphql`
  fragment ContentWithImageFragment on ContentfulContentWithImage {
    id
    heading
    content {
      raw
      references {
        ... on ContentfulButton {
          contentful_id
          __typename
          ...Button
        }
      }
    }
    image {
      gatsbyImageData
    }
  }
`
