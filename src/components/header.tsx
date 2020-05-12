import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
        linkedin_username
        medium
        github
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

interface ItemType {
  href: string
  icon: React.FC<any>
}

const Item: React.FC<ItemType> = props => {
  const { icon: Icon } = props
  return (
    <a
      href={props.href}
      className="group border border-gray-400 rounded-full py-3 px-3 text-gray-700 text-xs font-open font-light hover:border-black hover:bg-black hover:text-white transition duration-300 hover:shadow-lg"
    >
      <Icon height={15} width={15} className="fill-current" />
    </a>
  )
}

const Header = () => {
  const {
    file: { childContentJson: results },
  } = useStaticQuery(query)

  return (
    <header className="py-32 gradient-header">
      <div className="container mx-auto max-w-md flex flex-col items-center">
        <Img
          className="rounded-full shadow-xl"
          fixed={results.profile_pic.childImageSharp.fixed}
        />
        <h1 className="mt-8 text-2xl text-gray-900 uppercase font-extrabold font-open text-center">
          {results.name}
        </h1>
        <h2 className="mt-1 text-center leading-normal text-lg font-open font-light text-gray-600">
          {results.site_tagline}
        </h2>
        <div className="flex flex-row space-x-2 mt-4 flex-wrap justify-center align-center">
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
    </header>
  )
}

export default Header
