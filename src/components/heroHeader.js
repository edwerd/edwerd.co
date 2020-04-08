import React from "react"
import { StaticQuery, graphql } from "gatsby"
export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero">
        <h1 className="h1">{data.site.siteMetadata.home.title}</h1>
      </div>
    )}
  />
)
