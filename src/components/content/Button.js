import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

const Buttons = ({buttons}) => {

  return buttons.map(({ buttonText, externalLink, linkedPage, id }) => {
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
          <Link key={id} to="/" className="white-accent-ghost-button">
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