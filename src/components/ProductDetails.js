import React, { useState, useContext } from "react"
import priceFormat from "../utils/priceFormat"
import {
  Tag,
  SizeButton,
  SizeSelect,
  QtyButton,
  QtySelect,
  Button,
  StyledProductDetail,
} from "../styles/components"
import { SEO, Stars } from "./"
import { CartContext } from "../context"

const ProductDetails = ({ product }) => {
  const price = priceFormat(product.price)
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)
  const { addToCart } = useContext(CartContext)

  const handleSubmit = () => {
    addToCart({ ...product, quantity: qty })
  }

  return (
    <StyledProductDetail>
      <SEO title={product.name} />
      <img src={product.image} alt={product.name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{product.name}</h2>
        <b>USD {price}</b>
        <Stars />
        {!product.wear && <h3>Color: Azul</h3>}
        <small>{product.description}</small>
        {!product.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>XS</SizeButton>
            <SizeButton onClick={() => setSize(2)}>S</SizeButton>
            <SizeButton onClick={() => setSize(3)}>M</SizeButton>
            <SizeButton onClick={() => setSize(4)}>L</SizeButton>
          </SizeSelect>
        )}
        <p>Cantidad:</p>
        <QtySelect>
          <QtyButton onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>
            -
          </QtyButton>
          <input type="text" disable="true" readOnly value={qty} />
          <QtyButton onClick={() => setQty(qty + 1)}>+</QtyButton>
        </QtySelect>
        <Button onClick={handleSubmit}>Agragar al carrito</Button>
      </div>
    </StyledProductDetail>
  )
}

export default ProductDetails
