import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout/layout'
import Video from '../videos/meeting.mp4'
import Container from '../components/layout/container'
import * as variable from '../components/variables'
import styled from 'styled-components'
import BlogTeaser from "../components/entity/blog/blog-teaser"
const BlogTeaserContainer = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
padding:50px 0px;
border-bottom: thin solid #eee;
@media (max-width: ${variable.mobileWidth}) {
  flex-direction: column-reverse;
}
`

class Appbuild extends Component {
  state = {
      userloading: true,
      blockloading: true,
      error: false,
      user: {
        age: "",
        name: "",
        student: "",
      },
      blocks:{
          block: "",
      }
  }




    componentDidMount() {
      const purl = this.getPurl()
      const userid = '1'
      this.fetchUserData(userid)  
      console.log(purl)
    }

    fetchUserData = (userid) => {
      const thedata = graphql`
      query appBuildQuery {
          users: allApiUsers{
            edges{
              node{
                field_name
              }
            }
          }
        }
      `
      console.log(thedata)
      return thedata
      }

    getPurl() {
      const url = window.location.hostname
      // const url = "alex-gatsby-digett.netlify.com"
      var name = url.substr(0, url.indexOf('-'))
      if(name == ''){
          name = 'mark'
      }
      else{
          name = name
      }
      return name
  }


    render() {
      const { data } = this.props
      console.log(data)
      return (
        
          <div>
              <Layout>
              <div style={{marginTop:'100px'}}>
              <h1>Tester</h1>
            </div>
            </Layout>
          </div>
      )
    }

}

export default Appbuild
// export default class Appbuild extends React.Component {
//   render() {
//     const { data } = this.props
//     const { edges: users } = data.users
//     console.log(users)
//     return (
//       <Layout>
//         <Container style={{marginTop:'125px'}}>
//           <h1>Hello {users[0].node.field_name}!</h1>
//         </Container>

//       </Layout>
//     )
//   }
// }