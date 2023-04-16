import React from 'react'
import { graphql } from 'gatsby'
import './video-embed.module.scss'

const VideoEmbed = ({embedCode}) => {
  return (
    <section>
      {embedCode}
    </section>
  )
}

export default VideoEmbed

export const query = graphql`
  fragment VideoEmbedFragment on ContentfulVideoEmbed {
    id
    embedCode
  }
`