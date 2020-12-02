import React from "react"
import { StyledJumbo } from "../styles/components"
import { Image } from "../components"

export default function Jumbo({ description }) {
  return (
    <StyledJumbo>
      <div>
        <h2>Consigue el mejor swag exclusivo de Platzi!</h2>
        <small>{description}</small>
        <Image name="icon" />
      </div>
    </StyledJumbo>
  )
}
