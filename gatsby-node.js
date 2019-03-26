const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const remark = require('remark');
const remarkHTML = require('remark-html');

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions

  // page.matchPath is a special key that's used for matching pages
  // only on the client.
  if (page.path.match(/^\/app/)) {
    page.matchPath = "/app/*"

    // Update the page.
    createPage(page)
  }
}

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
      blog: allNodeRecipe(
        limit: 6
        sort: {fields: [created], order: ASC}
        ) {
        edges {
          node {
            fields {
              slug
              created
            }
            id
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const insights = result.data.blog.edges

    insights.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        component: path.resolve(
          `./src/templates/blog-post.js`
        ),
        // additional data can be passed via context
        context: {
          id
        },
      })
    })

            // Create blog-list pages
            const poster = result.data.blog.edges
            const postsPerPage = 6
            const numPages = Math.ceil(poster.length / postsPerPage)
            Array.from({ length: numPages }).forEach((_, i) => {
              createPage({
                path: i === 0 ? `/insights` : `/insights/${i + 1}`,
                component: path.resolve("./src/templates/blog.js"),
                context: {
                  skip: i * postsPerPage,
                  limit: postsPerPage,
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
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
  if (node.internal.type === `node__recipe`) {
    const slug = `${node.path.alias}/`
    const created = node.created
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    createNodeField({
      node,
      name: `created`,
      value: created,
    })
  }
}
