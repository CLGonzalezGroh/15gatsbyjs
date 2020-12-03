import React from "react"
import { ProductDetails } from "../components"

const ProductTemplate = ({ pageContext }) => {
  return <ProductDetails product={pageContext} />
}

export default ProductTemplate
