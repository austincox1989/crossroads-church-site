import React, { useCallback, useEffect } from 'react'
import './side-nav.module.scss'

const SideNav = ({ isNavOpen, handleCloseNav }) => {
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
        <div className="side-nav--content">SIDE NAV</div>
      </aside>
      <div
        onClick={handleCloseNav}
        onKeyDown={handleCloseNavEscKeyDown}
        role="button"
        tabIndex="-1"
        aria-label="Clickable overlay to close side navigation"
      ></div>
    </>
  )
}

export default SideNav
