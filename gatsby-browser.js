import React from "react"
import { AppProvider } from "./src/components/context/context"
import "./src/assets/scss/main.scss"

export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>
}
