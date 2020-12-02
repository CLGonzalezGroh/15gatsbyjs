import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

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
const Button = styled.button`
  width: 8rem;
  background-color: #98ca3f;
  border: none;
  border-radius: 10px;
  color: ${props => props.color || "white"};
  &:hover {
    color: white;
  }
`
const IndexPage = ({ data }) => {
  const description = data.allSite.edges[0].node.siteMetadata.description
  return (
    <>
      <SEO title="Home" />
      <Jumbo description={description} />
      <Button color="grey">Comprar</Button>
    </>
  )
}

export default IndexPage
