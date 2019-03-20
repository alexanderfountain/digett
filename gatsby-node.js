const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const remark = require('remark');
const remarkHTML = require('remark-html');
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      markdown: allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
      blog: allNodeBlog(limit: 100) {
        edges {
          node {
            id
            title
          }
        }
      }
      user: allUserUser(limit: 100) {
        edges {
          node {
            name
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

            // Create blog-list pages
            const poster = result.data.blog.edges
            const postsPerPage = 6
            const numPages = Math.ceil(poster.length / postsPerPage)
            Array.from({ length: numPages }).forEach((_, i) => {
              createPage({
                path: i === 0 ? `/blog` : `/blog/${i + 1}`,
                component: path.resolve("./src/pages/blog.js"),
                context: {
                  limit: postsPerPage,
                  skip: i * postsPerPage,
                  numPages,
                  currentPage: i + 1
                },
              })
            })

    const posts = result.data.markdown.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  const nodess = node.frontmatter
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}