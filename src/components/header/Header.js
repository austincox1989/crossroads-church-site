import React from 'react'
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import './header.module.scss'

const Header = ({headerLogo}) => {

  console.log(headerLogo)

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
