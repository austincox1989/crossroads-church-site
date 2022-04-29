import React from 'react'
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FaBars } from "react-icons/fa"
import MainNav from '../main-nav/MainNav'
import './header.module.scss'

const Header = ({headerLogo, mainNav}) => {
  return (
    <header className={`header`}>
      <Link to="/" className={`header--logo`}>
        <GatsbyImage image={headerLogo} alt={`crossroads church logo`} />
      </Link>
      <MainNav navigation={mainNav} />
      <FaBars
        className={`menu-button`}
        id="menu-button"
      />
    </header>
  )
}

export default Header
