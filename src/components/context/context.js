import React, { useState, createContext, useEffect, useCallback } from "react"

const AppContext = createContext()

const AppProvider = ({ children }) => {

  const [size, setSize] = useState(null)
  const [height, setHeight] = useState(null)
  const [isNavOpen, setNav] = useState(false)

  useEffect(() => {
    if (window) {
      setSize(window.innerWidth)
      setHeight(window.pageYOffset)
      window.addEventListener("resize", () => {
        setSize(window.innerWidth)
      })
      window.addEventListener("scroll", () => {
        setHeight(window.pageYOffset)
      })
    }

    return () => {
      window.removeEventListener("resize", () => {})
      window.removeEventListener("scroll", () => {})
    }
  }, [])

  const handleOpenNav = useCallback(() => {
    setNav(true)
  }, [])

  const handleCloseNav = useCallback(() => {
    setNav(false)
  }, [])

  return (
    <AppContext.Provider
      value={{
        size,
        height,
        handleCloseNav,
        handleOpenNav,
        isNavOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
