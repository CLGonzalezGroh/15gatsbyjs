import React from "react"
import { Link } from "gatsby"

import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"

export default function cancel() {
  return (
    <div>
      <SEO title="Compra cancelada" />
      <Purchase>
        <h2>Compra Cancelada</h2>
        <p>Cuando quieras estara disponible para ti tu swag</p>
        <p>Te esperamos de vuelta. No pares de aprende!</p>
        <span rol="img" aria-label="emoji">
          ❤
        </span>
        <Link to="/">
          <Button>Volver al Catalogo</Button>
        </Link>
      </Purchase>
    </div>
  )
}
