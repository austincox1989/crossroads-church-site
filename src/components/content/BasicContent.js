import React from 'react'
import { graphql } from 'gatsby'
import RichTextRenderer from './RichTextRenderer'
import './content.module.scss'

const BasicContent = ({ content }) => {
  return content.map(
    ({ heading, content, id }, i) => {
      return (
        <div key={id} className={`container basic-content`}>
          <h2>{heading}</h2>
          <RichTextRenderer
            richText={content}
            className="basic-content--content"
          />
        </div>
      )
    }
  )
}

export default BasicContent

export const query = graphql`
  fragment BasicContentFragment on ContentfulBasicContent {
    id
    heading
    content {
      raw
    }
  }
`
