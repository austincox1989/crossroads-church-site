import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import SocialLinks from '../social-links/SocialLinks'
import './footer.module.scss'

const Footer = ({ footerLogo, socialIcons }) => {
  return (
    <footer className="footer">
      <GatsbyImage
        image={footerLogo}
        alt={`crossroads church`}
        className="footer--logo"
      />
      <div className="footer--address">
        <p>27 Church Lane</p>
        <p>Hancock, ME 04640</p>
        <p>(207) 610-7836</p>
      </div>
      <SocialLinks icons={socialIcons} />
    </footer>
  )
}

export default Footer
