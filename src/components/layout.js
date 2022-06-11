import React, { useEffect, useState, useCallback } from 'react'
import { useStaticQuery, graphql, Script } from 'gatsby'
import scrollToElement from 'scroll-to-element'
import Seo from './seo'
import Header from './header/Header'
import Footer from './footer/Footer'
import SideNav from './side-nav/SideNav'

const Layout = ({ children, hash }) => {
  const data = useStaticQuery(layoutQuery)
  const { headerLogo, headerLogoSticky, footerLogo, mainNav } =
    data.contentfulSettings
  const [height, setHeight] = useState(null)
  const [isNavOpen, setNav] = useState(false)

  useEffect(() => {
    if (!hash) return
    let mounted = true

    setTimeout(() => {
      if (mounted) {
        scrollToElement(hash, {
          duration: 1000,
          offset: -200,
        })
      }
    }, 200)

    return () => {
      mounted = false
    }
  }, [hash])

  useEffect(() => {
    if (window) {
      setHeight(window.pageYOffset)
      window.addEventListener('scroll', () => {
        setHeight(window.pageYOffset)
      })
    }

    return () => {
      window.removeEventListener('scroll', () => {})
    }
  }, [])

  const handleOpenNav = useCallback(() => {
    setNav(true)
  }, [])

  const handleCloseNav = useCallback(() => {
    setNav(false)
  }, [])

  return (
    <>
      <Seo />
      <Header
        headerLogo={headerLogo.gatsbyImageData}
        headerLogoSticky={headerLogoSticky.gatsbyImageData}
        mainNav={mainNav}
        height={height}
        handleOpenNav={handleOpenNav}
      />
      <main>{children}</main>
      <Footer footerLogo={footerLogo.gatsbyImageData} />
      <SideNav
        sideNavItems={mainNav}
        handleCloseNav={handleCloseNav}
        isNavOpen={isNavOpen}
        logo={headerLogoSticky.gatsbyImageData}
      />
      <Script src="https://js.churchcenter.com/modal/v1" />
    </>
  )
}

export default Layout

export const layoutQuery = graphql`
  query SettingsQuery {
    contentfulSettings {
      headerLogo {
        gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
      headerLogoSticky {
        gatsbyImageData(width: 200, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
      footerLogo {
        gatsbyImageData(width: 400, placeholder: BLURRED, formats: [AUTO, WEBP])
      }
      mainNav {
        ...navItem
      }
    }
  }
`
