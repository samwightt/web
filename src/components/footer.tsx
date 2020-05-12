import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Twitter from "../../assets/twitter.svg"
import Medium from "../../assets/medium.svg"
import Instagram from "../../assets/instagram.svg"

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

interface ItemType {
  href: string
  icon: React.FC<any>
}

const Item: React.FC<ItemType> = props => {
  const { icon: Icon } = props
  return (
    <a
      href={props.href}
      className="group border border-gray-400 rounded-full py-2 px-2 text-gray-600 text-xs font-open font-light hover:border-black hover:bg-black hover:text-white transition duration-300 flex flex-row items-center space-x-2"
    >
      <Icon height={15} width={15} className="fill-current" />
    </a>
  )
}

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
            href={`https://twitter.com/${results.twitter}`}
            icon={Twitter}
          />
          <Item
            href={`https://instagram.com/${results.twitter}`}
            icon={Instagram}
          />
          <Item href={`https://medium.com/@${results.twitter}`} icon={Medium} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
