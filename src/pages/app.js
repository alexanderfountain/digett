import React, { Component } from "react"
import Layout from "../components/layout/layout"

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
        blocks:{
            block: "",
        }
      }

      componentDidMount() {
        const userid = this.getUrlVars('userid')
        this.fetchUserData(userid)
      }

      componentDidUpdate() {
        if(this.state.userloading === false && this.state.blockloading == true){
          this.fetchBlocks(this.state.user)
        }
      }

      render() {
    
        const { age, name, student } = this.state.user
        this.state.blocks.block = this.state.blocks.block.replace('[name]', name)
        const { block } = this.state.blocks
        // block = block.replace('[*],', name)
        // console.log(this.state.user)
    
        return (
            <div>
                <Layout>
                <div style={{marginTop:'100px'}}>
                <div dangerouslySetInnerHTML={{__html: block}} />
              </div>
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
        console.log(result)
        this.setState({
          blockloading: false,
            blocks:{
              ...this.state.blocks,
              block: result[0].body,
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
      
    }
      export default App