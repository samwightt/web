import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const query = graphql`
  {
    file(relativePath: { eq: "site.json" }) {
      childContentJson {
        name
        site_theme
        site_tagline
        profile_pic {
          childImageSharp {
            fixed(width: 100, height: 100) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

const qu = ``

const Header = () => {
  const {
    file: { childContentJson: results },
  } = useStaticQuery(query)

  return (
    <section className="py-32">
      <div className="container mx-auto max-w-md flex flex-col items-center">
        <div
          style={{ borderColor: results.site_theme }}
          className="border-4 rounded-full flex flex-col items-center justify-center py-1 px-1"
        >
          <Img
            className="rounded-full p-0 m-0"
            fixed={results.profile_pic.childImageSharp.fixed}
          />
        </div>
        <h1
          className="mt-3 text-2xl uppercase font-extrabold font-open text-center"
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
