import React from "react"
import { Link, graphql } from "gatsby"

import { SEO, Jumbo } from "../components"

export const query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const description = data.allSite.edges[0].node.siteMetadata.description
  console.log(description)
  return (
    <>
      <SEO title="Home" />
      <Jumbo description={description} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/success/">Go to success</Link> <br />
      <Link to="/cancel/">Go to cancel</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </>
  )
}

export default IndexPage
