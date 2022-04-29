import React from 'react'
import { Link, graphql } from 'gatsby'
import './main-nav.module.scss'


const MainNav = ({navigation}) => {

  const getNavItems = () => {
    return (
      navigation.map((navItem) => {
        if (navItem.homepage) {
          return (
            <Link to='/' key={navItem.id}>{navItem.linkText}</Link>
          )
        } else if (navItem.externalLink) {
          return (
            <Link to={navItem.externalLink} key={navItem.id}>{navItem.linkText}</Link>
          )
        } else {
          return (
            <Link to={`/${navItem.linkedPage.slug}`} key={navItem.id}>{navItem.linkText}</Link>
          )
        }
      })
    )
  }
    
  return (
    <nav role="navigation" className={`main-nav`} aria-label="Main">
      {getNavItems()}
    </nav>
  )
}

export default MainNav

export const query = graphql`
  fragment navItemNoChildren on ContentfulNavLink {
    linkText
    linkedPage {
      ... on ContentfulGenericInteriorPage {
        slug
      }
      ... on ContentfulHomepage {
        homepage
      }
    }
    externalLink
    id
  }

  fragment navItem on ContentfulNavLink {
    id
    linkText
    linkedPage {
      ... on ContentfulGenericInteriorPage {
        slug
      }
      ... on ContentfulHomepage {
        homepage
      }
    }
    externalLink
    subNavItems {
      ...navItemNoChildren
    }
  }
`