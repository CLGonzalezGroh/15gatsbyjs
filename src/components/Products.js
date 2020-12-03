import React from "react"
import { Link } from "gatsby"
import priceFormat from "../utils/priceFormat"
import { StyledProducts } from "../styles/components"

const Products = ({ products }) => {
  return (
    <StyledProducts>
      <h2>Productos</h2>
      <section>
        {products.map(({ node }) => {
          const price = priceFormat(node.price)
          return (
            <article key={node.id}>
              <img src={node.image} alt={node.name} />
              <p>{node.name}</p>
              <small>USD {price}</small>
              <Link to={`${node.id}`}>
                Comprar ahora{" "}
                <span role="img" aria-label="finger">
                  👉
                </span>
              </Link>
            </article>
          )
        })}
      </section>
    </StyledProducts>
  )
}

export default Products
