import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Item from "./socialicon"

import Twitter from "../../assets/twitter.svg"
import Instagram from "../../assets/instagram.svg"
import Medium from "../../assets/medium.svg"
import LinkedIn from "../../assets/linkedin.svg"
import GitHub from "../../assets/github.svg"

const query = graphql`
  {
    file(relativePath: { eq: "site.json" }) {
      childContentJson {
        name
        site_theme
        site_tagline
        twitter
        instagram
        medium
        linkedin_username
        github
        profile_pic {
          childImageSharp {
            fixed(width: 40, height: 40) {
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
    <footer className="py-4 border-t border-gray-200">
      <div className="px-8 md:px-16 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center space-x-3">
          <Img
            className="rounded-full shadow-lg"
            fixed={results.profile_pic.childImageSharp.fixed}
          />
          {/* <h1 className="text-lg font-open font-extrabold text-gray-600 uppercase">
            {results.name}
          </h1> */}
        </div>
        <div className="flex flex-row space-x-2">
          <Item
            icon={Twitter}
            href={`https://twitter.com/${results.twitter}`}
          />
          <Item icon={GitHub} href={`https://github.com/${results.twitter}`} />
          <Item
            icon={LinkedIn}
            href={`https://linkedin.com/in/${results.medium}`}
          />
          <Item
            icon={Instagram}
            href={`https://instagram.com/${results.instagram}`}
          />
          <Item icon={Medium} href={`https://medium.com/@${results.medium}`} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
