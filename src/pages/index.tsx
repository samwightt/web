import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import renderAst from "../lib/renderAst"

import Layout from "../components/layout"
import SEO from "../components/seo"

const query = graphql`
  {
    file(relativePath: { eq: "home.md" }) {
      childMarkdownRemark {
        htmlAst
      }
    }
  }
`

const IndexPage = () => {
  const {
    file: {
      childMarkdownRemark: { htmlAst },
    },
  } = useStaticQuery(query)

  return (
    <Layout>
      <SEO title="Home" />
      {renderAst(htmlAst)}
    </Layout>
  )
}

export default IndexPage
