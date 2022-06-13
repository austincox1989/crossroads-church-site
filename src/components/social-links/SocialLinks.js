import React from 'react'
import { graphql } from 'gatsby'
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa'
import './social-links.module.scss'

const SocialLinks = ({ icons }) => {
  return (
    <aside className="social-icons">
      {icons.map(({ id, socialLink, socialPlatform }) => {
        let icon
        switch (socialPlatform[0]) {
          case 'Facebook':
            icon = <FaFacebook />
            break
          case 'YouTube':
            icon = <FaYoutube />
            break
          case 'Instagram':
            icon = <FaInstagram />
            break
          default:
            break
        }
        return (
          <a href={socialLink} target="_blank" rel="noreferrer" key={id}>
            {icon}
          </a>
        )
      })}
    </aside>
  )
}

export default SocialLinks

export const query = graphql`
  fragment SocialLinkFragment on ContentfulSocialIconAndLink {
    id
    socialLink
    socialPlatform
  }
`
