import React from "react"
import { graphql } from "gatsby"

import { SEO, Jumbo, Products } from "../components"

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allMongodbGatsbyDbSwags {
      edges {
        node {
          id
          name
          description
          image
          price
        }
      }
    }
  }
`
const IndexPage = ({ data }) => {
  const description = data.allSite.edges[0].node.siteMetadata.description
  const products = data.allMongodbGatsbyDbSwags.edges
  return (
    <>
      <SEO title="Home" />
      <Jumbo description={description} />
      <Products products={products} />
    </>
  )
}

export default IndexPage
