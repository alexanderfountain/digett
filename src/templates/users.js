import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/layout'
import Container from '../components/layout/container'
import * as variable from '../components/variables'
import styled from 'styled-components'
import Img from "gatsby-image"

export const UsersTemplate = ({
  user,
}) => {
  return (

    <Layout>

      <section className="section" style={{paddingBottom:'40px'}}>
      <Container style={{marginTop:'125px'}}>

      </Container>
      </section>
      </Layout>
  )
}

const UsersBlocks = ({ data }) => {
  // const { node: user } = data.users.allApiUsers.edges[0]
  console.log(data)
  return (
      // <UsersTemplate
      // user={user}
      // />
      <h2>
        Hi
      </h2>
  )
}

export default UsersBlocks

export const pageQuery = graphql`
  query UserQuery {
    users: allApiUsers{
      edges{
        node{
          field_name
        }
      }
    }
  }
`
