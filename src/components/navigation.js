import React from "react"
import {Link} from "gatsby"

export default (props) => (
  <nav className="navigation">
    <Link to="/about">About</Link>
    <Link to="/portfolio">Portfolio</Link>
    <Link to="/cv">CV</Link>
    <Link to="/contact">Contact</Link>
  </nav>

)
