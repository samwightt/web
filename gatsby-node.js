const _ = require("lodash")
const Promise = require("bluebird")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (_.get(node, "internal.type") === "MarkdownRemark") {
    const parent = getNode(_.get(node, "parent"))

    createNodeField({
      node,
      name: "collection",
      value: _.get(parent, "sourceInstanceName"),
    })

    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve("./src/templates/blogPost.tsx")

  const result = await graphql(`
    {
      allMarkdownRemark(
        filter: { fields: { collection: { eq: "posts" } } }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error while running posts GraphQL query.")
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/post${node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
