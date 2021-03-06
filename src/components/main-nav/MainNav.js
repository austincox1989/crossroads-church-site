import React from 'react'
import { Link, graphql } from 'gatsby'
import './main-nav.module.scss'


const MainNav = ({navigation}) => {

  const filteredNavItems = navigation.slice(0, 4)

  const getNavItems = () => {
    return filteredNavItems.map((navItem) => {
      if (navItem.homepage) {
        return (
          <Link to="/" key={navItem.id}>
            {navItem.linkText}
          </Link>
        )
      } else if (navItem.externalLink) {
        return (
          <a
            href={navItem.externalLink}
            key={navItem.id}
            target="_blank"
            rel="noreferrer"
          >
            {navItem.linkText}
          </a>
        )
      } else {
        return (
          <Link to={`/${navItem.linkedPage.slug}`} key={navItem.id}>
            {navItem.linkText}
          </Link>
        )
      }
    })
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