import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/layout'
import Container from '../components/layout/container'
import * as variable from '../components/variables'
import styled from 'styled-components'
import Img from "gatsby-image"

export default class UsersBlocks extends React.Component {
  render() {
    const { name } = this.props.pageContext
    const { data } = this.props
    const blocks = data.blocks.edges
    console.log(this.props.pageContext)
    console.log(data)

    return (
      <Layout>
        <Container style={{marginTop:'125px'}}>
        <h1>Hi {name}!</h1>
        {blocks
              .map((block) => (
                <div
                  key={block.node.id}
                  style={{backgroundColor:block.node.field_background_color, color:'black', padding:'20px', marginBottom:'20px'}}>
                  <h2>{block.node.field_section_title}</h2>
                <div dangerouslySetInnerHTML={{__html: block.node.body.replace('[name]', name)}} />
                </div>
          ))}
        </Container>
      </Layout>
      
    )

  }

}
  


export const pageQuery = graphql`
  query UserQuery($age: String, $student: String) {
    blocks: allApiBlocks(
      filter: {
        field_age: {eq: $age}, field_student_type: {eq: $student}
      }
      ){
      edges{
        node{
          id
          field_age
          field_student_type
          field_background_color
          field_section_title
          body
        }
      }
    }
  }
`
