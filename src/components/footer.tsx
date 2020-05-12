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
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

const Footer = () => {
  const {
    file: { childContentJson: results },
  } = useStaticQuery(query)

  return (
    <footer className="py-8 border-t border-gray-200">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <div className="flex flex-row items-center space-x-3">
          <Img
            className="rounded-full shadow-lg"
            fixed={results.profile_pic.childImageSharp.fixed}
          />
          <h1 className="text-lg font-bold text-gray-700 uppercase">
            {results.name}
          </h1>
        </div>
        <div>
          <h1 className="text-gray-700">Other text here.</h1>
        </div>
      </div>
    </footer>
  )
}

export default Footer
