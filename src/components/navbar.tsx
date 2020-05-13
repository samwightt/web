import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import useScrollPosition from "@react-hook/window-scroll"
import Img from "gatsby-image"

const query = graphql`
  {
    file(relativePath: { eq: "site.json" }) {
      childContentJson {
        name
        profile_pic {
          childImageSharp {
            fixed(width: 30, height: 30) {
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

interface NavbarProps {
  isHome: boolean
}

const Navbar: React.FC<NavbarProps> = props => {
  const scrollY = useScrollPosition(15)
  const {
    file: { childContentJson: results },
  } = useStaticQuery(query)

  return (
    <nav
      className={`space-x-4 flex flex-row px-8 md:px-16 py-4 sticky top-0 left-0 right-0 z-10 bg-white justify-between items-center transition duration-100 ${
        scrollY > 15 && "shadow-sm border-b border-gray-200"
      }`}
    >
      <Link
        to="/"
        className={`group flex flex-row items-center space-x-2 transition duration-100 ${
          scrollY > 361 || !props.isHome ? "opacity-100" : "opacity-0"
        }`}
      >
        <Img
          className="rounded-full shadow-md transition duration-200 opacity-75 group-hover:opacity-100"
          fixed={results.profile_pic.childImageSharp.fixed}
        />
        <h1 className="uppercase font-open font-extrabold text-sm text-gray-600 group-hover:text-black transition duration-200">
          {results.name}
        </h1>
      </Link>
      <div className="flex flex-row space-x-4">
        <Link
          to="/"
          className="font-open text-black hover:text-black transition duration-300 font-light hover:font-normal transition duration-300"
          activeClassName="font-semibold hover:font-semibold"
        >
          Home
        </Link>
        <Link
          to="/blog/"
          className="font-open text-black hover:text-black transition duration-300 font-light hover:font-normal"
          activeClassName="font-semibold"
        >
          Blog
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
