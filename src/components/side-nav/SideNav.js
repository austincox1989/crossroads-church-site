import React, { useCallback, useEffect } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { GrClose } from 'react-icons/gr'
import SubNav from './SubNav'
import './side-nav.module.scss'

const SideNav = ({ isNavOpen, handleCloseNav, logo, sideNavItems }) => {
  const handleCloseNavEscKeyDown = useCallback(
    (event) => {
      const isEscKey = event.keyCode === 27
      if (isEscKey && isNavOpen) {
        handleCloseNav()
      }
    },
    [isNavOpen, handleCloseNav]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleCloseNavEscKeyDown, false)

    return () => {
      document.removeEventListener('keydown', handleCloseNavEscKeyDown, false)
    }
  }, [handleCloseNavEscKeyDown])

  return (
    <>
      <aside className={isNavOpen ? `side-nav nav-open` : `side-nav`}>
        <div className={'side-nav--header'}>
          <Link to={'/'} onClick={handleCloseNav}>
            <GatsbyImage
              image={logo}
              alt={`crossroads church logo`}
              className="side-nav--logo"
            />
          </Link>
          <button onClick={handleCloseNav} className={'side-nav--close-button'}>
            <GrClose />
          </button>
        </div>
        <ul className="side-nav--links">
          {sideNavItems.map(
            ({ id, linkText, externalLink, linkedPage, subNavItems }) => {
              if (externalLink) {
                return (
                  <li key={id} className="side-nav--links--link">
                    <a href={externalLink} target="_blank" rel="noreferrer">
                      {linkText}
                    </a>
                    {subNavItems && <SubNav subItems={subNavItems} />}
                  </li>
                )
              } else {
                return (
                  <li key={id} className="side-nav--links--link">
                    <Link to={`/${linkedPage.slug}`}>{linkText}</Link>
                    {subNavItems && <SubNav subItems={subNavItems} />}
                  </li>
                )
              }
            }
          )}
        </ul>
      </aside>
    </>
  )
}

export default SideNav
