import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <Link to='/contact' className="button -primary">Get in touch &rarr;</Link>
      </footer>
      <footer className="site-footer">
        <p>&copy; 2020 Edward Wisniewski &bull; Crafted with <span role="img" aria-label="love">❤️</span> in New Jersey.</p>
      </footer>
    </div>
  )
}
