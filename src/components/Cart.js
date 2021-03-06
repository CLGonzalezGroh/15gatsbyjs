import React, { useContext, useEffect, useState } from "react"
import { Link } from "gatsby"
import { CartContext } from "../context"

import { Button, StyledCart } from "../styles/components"
import priceFormat from "../utils/priceFormat"

const Cart = () => {
  const { cart } = useContext(CartContext)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const getTotal = () => {
      setTotal(
        cart.reduce((acc, current) => acc + current.price * current.quantity, 0)
      )
    }
    getTotal()
  }, [cart])

  return (
    <StyledCart>
      <h2>Carrito de compras</h2>
      <table>
        <tbody>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
          </tr>
          {cart.map(swag => (
            <tr key={swag.id}>
              <td>
                <img src={swag.image} alt={swag.name} />
              </td>
              <td>USD {priceFormat(swag.price)}</td>
              <td>{swag.quantity}</td>
              <td>USD {priceFormat(swag.quantity * swag.price)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal</h3>
          <small>USD {priceFormat(total)}</small>
        </div>
        <div>
          <Link to="/">
            <Button type="outline">Volver</Button>
          </Link>
          <Button>Comprar</Button>
        </div>
      </nav>
    </StyledCart>
  )
}

export default Cart
