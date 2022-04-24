import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import './variables.css'
import './global.css'
import Seo from './seo'
import Header from './header/Header'
import Navigation from './navigation'
import Footer from './footer'


const Template = ({ children }) => {

  const data = useStaticQuery(layoutQuery)
  const { headerLogo } = data.contentfulSettings
  return (
    <>
      <Seo />
      <Header headerLogo={headerLogo.gatsbyImageData}  />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Template

export const layoutQuery = graphql`
  query SettingsQuery {
    contentfulSettings {
      headerLogo {
        gatsbyImageData(
          width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP]
        )
      }
    }
  }
`
