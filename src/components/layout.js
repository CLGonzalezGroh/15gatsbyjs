/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import { Content, Footer } from "../styles/components"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>
        <main>{children}</main>
        <Footer>
          Hecho con ❤ por
          <a href="https://twitter.com/CeGonzalezGroh">@CeGonzalezGroh</a>
        </Footer>
      </Content>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
