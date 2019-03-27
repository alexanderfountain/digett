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
import Img from "gatsby-image"



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
      <Container style={{marginTop:'125px'}}>
      <Blogfullcontainer>
      <Blogleft>
      <h1>{post.title}</h1>
      <Img fluid={post.relationships.field_image.localFile.childImageSharp.fluid}/>
      <div dangerouslySetInnerHTML={{__html: post.field_recipe_instruction.value}} />
      </Blogleft>
      <Blogright style={{marginTop:'80px'}}>
      <div><strong>Difficulty: </strong>{post.field_difficulty}</div>
      <div><strong>Cooking Time: </strong>{post.field_cooking_time}</div>
      <div><strong>Preparation Time: </strong>{post.field_preparation_time}</div>
      <div><strong>Number of Servings: </strong>{post.field_number_of_servings}</div>
      </Blogright>
      </Blogfullcontainer>
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
          field_difficulty
          field_ingredients
          field_cooking_time
          field_preparation_time
          field_number_of_servings
          field_recipe_instruction{
            value
          }
          relationships{
            field_image{
              localFile{
                childImageSharp {
                  fluid(maxWidth: 800, maxHeight: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
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
