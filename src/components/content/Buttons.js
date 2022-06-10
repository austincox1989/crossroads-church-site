import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

const Buttons = ({ buttons, variant }) => {
  return buttons.map(({ buttonText, externalLink, linkedPage, id }) => {
    if (externalLink !== null) {
      const isCcModal = externalLink.includes('churchcenter.com')
        ? 'true'
        : 'false'
      return (
        <a
          key={id}
          href={externalLink}
          className={`button ${variant}`}
          data-open-in-church-center-modal={isCcModal}
        >
          {buttonText}
        </a>
      )
    } else {
      if (linkedPage.homepage) {
        return (
          <Link key={id} to="/" className={`button ${variant}`}>
            {buttonText}
          </Link>
        )
      } else {
        const { slug } = linkedPage
        return (
          <Link key={id} to={`/${slug}`} className={`button ${variant}`}>
            {buttonText}
          </Link>
        )
      }
    }
  })
}

export default Buttons

export const query = graphql`
  fragment Button on ContentfulButton {
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
`
