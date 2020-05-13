import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/regular-layout"
import renderAST from "../lib/renderAst"

export default props => {
  const posts = props.data.allMarkdownRemark.edges

  if (posts.length === 0)
    return (
      <Layout hasHeader title="Blog" subtitle="Thoughts, musings, and more.">
        <h1 className="font-lato text-4xl font-extrabold text-black">
          Whoops! Looks like there's no published content. :(
        </h1>
        <h2 className="mt-8 font-lato text-2xl font-light text-black">
          Check back later for more.
        </h2>
      </Layout>
    )

  return (
    <Layout hasHeader title="Blog" subtitle="Thoughts, musings, and more.">
      {posts.map(({ node }) => {
        return (
          <div key={node.fields.slug}>
            <h1 className="font-extrabold font-lato text-4xl mb-4 leading-tight">
              <Link
                className="hover:text-gray-700 transition duration-300"
                to={`/post${node.fields.slug}`}
              >
                {node.frontmatter.title}
              </Link>
            </h1>
            <Link to={`/post${node.fields.slug}`}>
              {renderAST(node.excerptAst)}
            </Link>
            <span></span>
            <Link
              className="inline-block my-4 py-2 px-3 font-open font-semibold border text-gray-700 border-gray-400 rounded-full hover:bg-black hover:border-black hover:text-white hover:shadow-lg transition duration-300"
              to={`/post${node.fields.slug}`}
            >
              View post
            </Link>
          </div>
        )
      })}
    </Layout>
  )
}

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: {
        frontmatter: { published: { eq: true } }
        fields: { collection: { eq: "posts" } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            title
            published
          }
          excerptAst
        }
      }
    }
  }
`
