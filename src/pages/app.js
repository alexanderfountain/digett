import React, { Component } from "react"
import Layout from "../components/layout/layout"

class App extends Component {
    state = {
        loading: false,
        error: false,
        user: {
          age: "",
          name: "",
        },
        blocks:{
            block: "",
        }
      }

      componentDidMount() {
        const userid = this.getUrlVars('userid')
        this.fetchUserData(userid)
        if(this.props.loading == false){
            
        }
      }

      render() {
    
        const { age, name } = this.state.user
        console.log(this.state.user)
    
        return (
            <div>
                <Layout>
                <div style={{marginTop:'100px'}}>
              {age}
              {name}
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
              user:{
                ...this.state.user,
                loading: false,
                age: result[0].field_age,
                name: result[0].field_name
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