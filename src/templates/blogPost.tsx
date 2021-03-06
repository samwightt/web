import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/regular-layout"
import renderAST from "../lib/renderAst"
import SEO from '../components/seo'

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, htmlAst, excerpt } = markdownRemark

  return (
    <Layout hasHeader={false}>
      <SEO title={frontmatter.title} description={excerpt}/>
      <div>
        <h1 className="font-extrabold font-lato text-4xl mb-4 leading-tight">
          {frontmatter.title}
        </h1>
        <h2>{frontmatter.date}</h2>
      </div>
      {renderAST(htmlAst)}
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        date
        title
      }
      excerpt(pruneLength: 500)
    }
  }
`
