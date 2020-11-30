import React from "react"
import { Link } from "gatsby"

import { SEO, Jumbo } from "../components"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Jumbo />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/success/">Go to success</Link> <br />
    <Link to="/cancel/">Go to cancel</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </>
)

export default IndexPage
