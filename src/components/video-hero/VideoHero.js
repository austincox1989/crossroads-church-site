import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import './video-hero.module.scss'

const VideoHero = ({videoBanner}) => {

  const { backgroundVideo, heading, subheading, buttons } = videoBanner

  const getButtons = () => {
    if (buttons.length > 0) {
      return (
        buttons.map(
          ({buttonText, externalLink, linkedPage, id}) => {
            if (externalLink !== null) {
              const isCcModal = externalLink.includes('churchcenter.com')
                ? 'true'
                : 'false'
              return (
                <a
                  key={id}
                  href={externalLink}
                  className="white-accent-ghost-button"
                  data-open-in-church-center-modal={isCcModal}
                >
                  {buttonText}
                </a>
              )
            } else {
              if (linkedPage.homepage) {
                return (
                  <Link key={id} to='/' className="white-accent-ghost-button">
                    {buttonText}
                  </Link>
                )
              } else {
                const { slug } = linkedPage
                return (
                  <Link key={id} to={`/${slug}`} className="white-accent-ghost-button">
                    {buttonText}
                  </Link>
                )
              }              
            }
          }
        )
      )
    }
  }

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
        {getButtons()}
        </div>
      </section>
    </section>
  )
}

export default VideoHero

export const query = graphql`
  fragment videoHeroFragment on ContentfulVideoHeroBanner {
    backgroundVideo {
      file {
        url
      }
    }
    heading
    subheading
    buttons {
      id
      buttonText
      externalLink
      linkedPage {
        ... on ContentfulGenericInteriorPage {
          id
          name
          slug
        }
        ... on ContentfulHomepage {
          homepage
        }
      }
    }
  }
`