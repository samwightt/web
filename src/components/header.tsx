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

export const HeaderContainer: React.FC = props => {
  return (
    <header className="py-32 gradient-header">
      <div className="container mx-auto max-w-md flex flex-col items-center">
        {props.children}
      </div>
    </header>
  )
}

const Header = () => {
  const {
    file: { childContentJson: results },
  } = useStaticQuery(query)

  return (
    <HeaderContainer>
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
        <Item icon={Twitter} href={`https://twitter.com/${results.twitter}`} />
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
    </HeaderContainer>
  )
}

export default Header
