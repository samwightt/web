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
            fixed(width: 175, height: 175) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

const Header = () => {
  const {
    file: { childContentJson: results },
  } = useStaticQuery(query)

  return (
    <header className="py-32 gradient-header">
      <div className="container mx-auto max-w-md flex flex-col items-center">
        <Img
          className="rounded-full p-0 m-0 shadow-xl"
          fixed={results.profile_pic.childImageSharp.fixed}
        />
        <h1 className="mt-8 text-2xl text-gray-900 uppercase font-extrabold font-open text-center">
          {results.name}
        </h1>
        <h2 className="mt-1 text-center leading-normal text-lg font-open font-light text-gray-600">
          {results.site_tagline}
        </h2>
      </div>
    </header>
  )
}

export default Header
