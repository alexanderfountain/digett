import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/layout'
import Container from '../components/layout/container'
import * as variable from '../components/variables'
import styled from 'styled-components'
import { HTMLContent } from '../components/Content'
import Form from '../components/form'
import Styledbutton from "../components/atoms/link"



const Blogfullcontainer = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`

const Blogleft = styled.div`
flex-basis:70%;
padding-right:20px;
@media (max-width: ${variable.mobileWidth}) {
  flex-basis:calc(100%);
  padding:0px;
}
`
const Blogright = styled.div`
flex-basis:30%;
padding:0px 0px 0px 20px;
text-align:center;
h6{
  margin:10px 0px 20px 0px;
}
@media (max-width: ${variable.mobileWidth}) {
  flex-basis:calc(100%);
  padding:0px;
}
`

export const BlogPostTemplate = ({
  post,
}) => {
  return (

    <Layout>

      <section className="section" style={{paddingBottom:'40px'}}>
      <Container>
<h1>{post.title}</h1>
      </Container>
      </section>
      </Layout>
  )
}

const BlogPost = ({ data }) => {
  const { node: post } = data.allNodeRecipe.edges[0]
  console.log(post)
  return (
      <BlogPostTemplate
      post={post}
      />
  )
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    allNodeRecipe(
      filter: { id: { eq: $id } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          id
          title
        }
      }
    }
  }
`
