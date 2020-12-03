import React, { useState } from "react"
import { SelectStars } from "../styles/components"

const Stars = () => {
  const [stars, setStars] = useState(5)
  return (
    <SelectStars selected={stars}>
      <span onClick={() => setStars(1)} aria-hidden="true">
        ★
      </span>
      <span onClick={() => setStars(2)} aria-hidden="true">
        ★
      </span>
      <span onClick={() => setStars(3)} aria-hidden="true">
        ★
      </span>
      <span onClick={() => setStars(4)} aria-hidden="true">
        ★
      </span>
      <span onClick={() => setStars(5)} aria-hidden="true">
        ★
      </span>
    </SelectStars>
  )
}

export default Stars
