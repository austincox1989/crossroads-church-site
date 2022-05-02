import React from "react"
import { graphql } from "gatsby"
import Buttons from "../content/Button"
import './video-hero.module.scss'

const VideoHero = ({videoBanner}) => {

  const { backgroundVideo, heading, subheading, buttons } = videoBanner

  return (
    <section className={`video-outer`}>
      <section className={`video-banner`}>
        <video
          playsInline
          autoPlay
          muted
          loop
          poster
          id="banner-video"
        >
            <source src={backgroundVideo.file.url} type="video/mp4" />
        </video>
        <div className={`banner-overlay`}></div>
      </section>
      <section className={`container banner-content-video`}>
        <h1>{heading}</h1>
        <h2>{subheading}</h2>
        <div className={`home-page-banner-links`}>
        <Buttons buttons={buttons} />
        </div>
      </section>
    </section>
  )
}

export default VideoHero

export const query = graphql`
  fragment VideoHeroFragment on ContentfulVideoHeroBanner {
    backgroundVideo {
      file {
        url
      }
    }
    heading
    subheading
    buttons {
      ...Button
    }
  }
`