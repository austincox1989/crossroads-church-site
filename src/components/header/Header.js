import React from 'react'
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import './header.module.scss'

const Header = ({headerLogo}) => {
  return (
    <header className={`header`}>
      <div>
        <Link to="/" className={`header--logo`}>
        <GatsbyImage image={headerLogo} alt={`crossroads church logo`} />
        </Link>
      </div>
    </header>
  )
}

export default Header
