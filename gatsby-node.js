/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve("src/templates/ProductTemplate.js")
  const result = await graphql(`
    query GET_PRODUCTS {
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
  `)
  if (result.errors) {
    throw result.errors
  }
  result.data.allMongodbGatsbyDbSwags.edges.forEach(({ node }) => {
    createPage({
      path: `${node.id}`,
      component: productTemplate,
      context: node,
    })
  })
}
