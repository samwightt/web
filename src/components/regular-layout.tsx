/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import { HeaderContainer } from "./header"
import Footer from "./footer"

import "./layout.css"

interface LayoutNoHeaderProps {
  hasHeader: false
}

interface LayoutProps {
  title: string
  subtitle: string
  hasHeader: true
}

const Layout: React.FC<LayoutNoHeaderProps | LayoutProps> = props => {
  const { children } = props
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div>
      <Navbar isHome={false} />
      {props.hasHeader && (
        <HeaderContainer>
          <h1 className="text-3xl font-extrabold uppercase font-open">
            {props.title}
          </h1>
          <h2 className="text-xl font-light font-open">{props.subtitle}</h2>
        </HeaderContainer>
      )}
      <main className="flex flex-col items-center py-32">
        <section className="max-w-2xl w-full">{children}</section>
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
