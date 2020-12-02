/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
const Layout = require("./src/components/layout.js").default

const { GlobalStyles } = require("./src/styles")

exports.wrapPageElement = ({ element }) => {
  return (
    <>
      <GlobalStyles />
      <Layout>{element}</Layout>
    </>
  )
}
