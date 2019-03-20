import React from "react";
import styled from "styled-components";
import Container from "../../layout/container";
import { StaticQuery, graphql } from 'gatsby'
import BlogTeaser from "../../entity/blog/blog-teaser";

const BlogListStyle = styled.section`

`;



export const BlogList = () => (
  <StaticQuery
    query={graphql`
      query EntityQyery {
        blogs: allMarkdownRemark(
          limit: 2
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                description
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                image
                author
              }
            }
          }
        }
      }
    `}
  render={data => (
    <>
    <BlogListStyle>
    {data.blogs.edges.map((post, index) => (
      <BlogTeaser
      key={index}
      post={post}
      >
      </BlogTeaser>
    ))}
    </BlogListStyle>
</>
    )}
  />

)

export default BlogList