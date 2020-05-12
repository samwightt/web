import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    file(relativePath: { eq: "site.json" }) {
      childContentJson {
        name
        site_theme
        site_tagline
      }
    }
  }
`

const Header = () => {
  const {
    file: { childContentJson: results },
  } = useStaticQuery(query)

  return (
    <section className="py-32">
      <div className="container mx-auto max-w-md flex flex-col items-center">
        <h1
          className="text-2xl uppercase font-extrabold font-open text-center"
          style={{ color: results.site_theme }}
        >
          {results.name}
        </h1>
        <h2 className="mt-2 text-center leading-normal text-lg font-open font-light text-gray-600">
          {results.site_tagline}
        </h2>
      </div>
    </section>
  )
}

export default Header
