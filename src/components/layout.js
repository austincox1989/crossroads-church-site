import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import './variables.css'
import './global.css'
import Seo from './seo'
import Header from './header/Header'
import Footer from './footer'


const Template = ({ children }) => {

  const data = useStaticQuery(layoutQuery)
  const { headerLogo } = data.contentfulSettings

  // useEffect(() => {
  //   if (!hash) return
  //   let mounted = true

  //   setTimeout(() => {
  //     if (mounted) {
  //       scrollToElement(hash, {
  //         duration: 1000,
  //         offset: -200
  //       })
  //     }
  //   }, 200)

  //   return () => {
  //     mounted = false
  //   }
  // }, [hash])

  return (
    <>
      <Seo />
      <Header headerLogo={headerLogo.gatsbyImageData}  />
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
