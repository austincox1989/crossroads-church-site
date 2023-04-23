import React from 'react'
import { graphql } from 'gatsby'
import './video-embed.module.scss'

const VideoEmbed = ({embedCode}) => {
  return (
    <section className='video-embed' dangerouslySetInnerHTML={{__html: embedCode}} />
  )
}

export default VideoEmbed

export const query = graphql`
  fragment VideoEmbed on ContentfulVideoEmbed {
    embedCode {
      id
      embedCode
    }
  }
`