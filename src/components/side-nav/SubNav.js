import React from 'react'
import { Link } from 'gatsby'
import './side-nav.module.scss'

const SubNav = ({ subItems }) => {
  return (
    <ul className="side-nav--subnav">
      {subItems.map(({ id, linkText, externalLink, linkedPage }) => {
        if (externalLink) {
          return (
            <li key={id} className="side-nav--links--sublink">
              <a href={externalLink} target="_blank" rel="noreferrer">
                {linkText}
              </a>
            </li>
          )
        } else {
          return (
            <li key={id} className="side-nav--links--sublink">
              <Link to={`/${linkedPage.slug}`}>{linkText}</Link>
            </li>
          )
        }
      })}
    </ul>
  )
}

export default SubNav
