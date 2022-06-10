import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { FaBars } from 'react-icons/fa'
import MainNav from '../main-nav/MainNav'
import { AppContext } from '../context/context'
import './header.module.scss'

const Header = ({ headerLogo, headerLogoSticky, mainNav }) => {
  const { height, handleOpenNav } = useContext(AppContext)
  let innerHeight
  if (window) {
    innerHeight = window.innerHeight
  }
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
