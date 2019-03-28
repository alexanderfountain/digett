import React, { Component } from "react"
import Layout from "../components/layout/layout"
import Container from '../components/layout/container'

class App extends Component {
    state = {
        userloading: true,
        blockloading: true,
        error: false,
        user: {
          age: "",
          name: "",
          student: "",
        },
        blocks:[],
      }

      componentDidMount() {
        const purl = this.getPurl()
        this.fetchUserData(purl)  

      }

      componentDidUpdate() {
        if(this.state.userloading === false && this.state.blockloading == true){
          this.fetchBlocks(this.state.user)
        }
      }

      render() {
    
        const {name} = this.state.user
        const {student} = this.state.user
        // this.state.blocks.block = this.state.blocks.block.replace('[name]', name)
        const {blocks} = this.state
        console.log(blocks)
        // block = block.replace('[*],', name)
        // console.log(this.state.user)
    
        
        return (
            <div>
                <Layout>
                  <Container style={{marginTop:'125px'}}>
                  <h1>Hi {name}!</h1>
                  {blocks
              .map((block, index) => (
                <div
                key={index}
                  style={{backgroundColor:block.field_background_color, color:'black', padding:'20px', marginBottom:'20px'}}>
                  <h2>{block.field_section_title}</h2>
                <div dangerouslySetInnerHTML={{__html: block.body.replace('[name]', name).replace('[student]', student)}} />
                </div>
          ))}
              </Container>
              </Layout>
            </div>
        )
      }

    getUrlVars(name) {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars[name];
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

    
    
      fetchUserData = (userid) => {
          fetch(`https://dev-gatsby-digett.pantheonsite.io/api/users/`+userid)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            userloading: false,
              user:{
                ...this.state.user,
                age: result[0].field_age,
                name: result[0].field_name,
                student: result[0].field_student_type
              }
            
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      }

      fetchBlocks= (user) => {
        const age = user.age
        const student = user.student
        fetch(`https://dev-gatsby-digett.pantheonsite.io/api/block-per-user?age=`+age+`&student=`+student)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          blockloading: false,
            blocks: result,
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
    }
      
    }
      export default App