import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { FaBars } from 'react-icons/fa'
import MainNav from '../main-nav/MainNav'
import './header.module.scss'

const Header = ({
  headerLogo,
  headerLogoSticky,
  mainNav,
  height,
  handleOpenNav,
}) => {
  const [innerHeight, setInnerHeight] = useState(0)
  useEffect(() => {
    setInnerHeight(window.innerHeight)
  }, [])
  const sticky = height > innerHeight ? 'header--sticky' : ''
  const logo = height > innerHeight ? headerLogoSticky : headerLogo
  return (
    <header className={`header ${sticky}`}>
      <Link to="/" className={`header--logo`}>
        <GatsbyImage image={logo} alt={`crossroads church logo`} />
      </Link>
      <MainNav navigation={mainNav} />
      <FaBars
        className={`header--menu-button`}
        id="menu-button"
        onClick={handleOpenNav}
      />
    </header>
  )
}

export default Header
