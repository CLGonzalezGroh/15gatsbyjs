import React from "react"
import { Link } from "gatsby"

import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"

export default function success() {
  return (
    <div>
      <SEO title="Compra Exitosa!" />
      <Purchase>
        <h2>Compra Exitosa!</h2>
        <p>Estero que disfrutes tu swag, lucelo con orgullo</p>
        <p>Te esperamos de vuelta. No pares de aprende!</p>
        <span role="img" aria-label="emoji">
          ❤
        </span>
        <Link to="/">
          <Button>Volver al Catalogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
