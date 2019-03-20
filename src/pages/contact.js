import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout/layout'
import contactphoto from '../images/contact2.jpeg'
import Container from '../components/layout/container'
import * as variable from '../components/variables'
import styled from 'styled-components'
import Form from '../components/form'

// const Styledlink = mixins.styledlink

// const Styledbutton = mixins.styledbutton

const ContactContainer = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
padding:50px 0px;
border-bottom: thin solid #eee;
@media (max-width: ${variable.mobileWidth}) {

}
`
const ContactLeft = styled.div`
flex-basis:calc(50% - 20px);
@media (max-width: ${variable.mobileWidth}) {
  flex-basis:calc(100%);
}
`
const ContactRight = styled.div`
flex-basis:calc(50% - 20px);
@media (max-width: ${variable.mobileWidth}) {
  flex-basis:calc(100%);
}
`
export default class ContactPage extends React.Component {
  render() {

    return (
      <Layout>
              <Helmet>
      <meta charSet="utf-8" />
      <title>1986.io | Contact</title>
      <link rel="canonical" href="https://1986.io/contact"></link>
      </Helmet>
        <section className="hero" style=
        {{ backgroundImage: `url(${contactphoto})`,
           paddingTop:'150px',
           paddingBottom:'50px',
           backgroundSize:'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    minHeight:'400px',
    }}
    >
            <Container style={{
              textAlign:'center',
            }}>
            <h1>Contact</h1>

            </Container>
            </section>
            
            <Container style={{
              textAlign:'center',
            }}>
            
            <section>
          
        <ContactContainer>
        <ContactLeft>

      <div style={{fontSize:'32px'}}>
        We realize your time is valuable.<br></br>We promise not to waste it.
      </div>
        <p>P.O Box 471</p>

        <p>St. Croix Falls, WI 54024</p>

        <p>651-399-9164</p>
      
        </ContactLeft>
      <ContactRight>
      <Form>
      <form name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true">
			<input type="hidden" name="form-name" value="contact" />
			<p hidden> <label htmlFor="bot-field">Don’t fill this out:{' '}<input name="bot-field" /> </label> </p>
								<div class="form-group">
									<input type="text" placeholder="Name" name="name" id="name" class="form-control" data-required="true" data-interactive="true" />
								</div>
								<div class="form-group">
									<input type="email" name="email" placeholder="Email" id="email" class="form-control" data-required="true" data-interactive="true" />
								</div>
								<div class="form-group">
									<input type="tel" name="phone" id="phone" placeholder="Phone Number" class="form-control" data-required="false" data-interactive="true" />
								</div>
								<div class="form-group text">
									<textarea name="textarea" id="textarea" placeholder="Message" class="textarea form-control" data-required="true" data-trim="true"/>
								</div>
								<div>
									{/* <Styledbutton type="submit" style={{
                    width:'100%',
                    marginTop:'0px',

                  }}>
                  Contact
                  </Styledbutton> */}
								</div>
							</form>
          </Form>
          </ContactRight>

          </ContactContainer>
          
          </section>
            </Container>

        
      </Layout>
    )
  }
}