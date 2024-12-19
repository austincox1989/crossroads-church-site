import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import './simple-hero.module.scss'

const SimpleHero = ({ banner }) => {
  const { heading, image } = banner
  return (
    <section className="simple-hero">
      {image && (
        <GatsbyImage
          image={image.gatsbyImageData}
          className="simple-hero--banner-image"
          alt={image.description}
        />
      )}
      <h1 className="simple-hero--heading">{heading}</h1>
    </section>
  )
}

export default SimpleHero

export const query = graphql`
  fragment SimpleHeroFragment on ContentfulSimpleHeroBanner {
    image {
      gatsbyImageData
      description
    }
    heading
  }
`
