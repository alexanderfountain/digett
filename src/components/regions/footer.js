import React from 'react'
import Container from '../../components/layout/container'
import * as variable from '../variables.js'
import styled from 'styled-components'
const Leftfooter = styled.div`
flex-basis:30%;
background-color:${variable.brand3};
padding:40px 0px;
padding-right:20px;
position:relative;
p{
  margin:5px 0px;
}
h4{
  margin:0px;
}
&:before {
  content:'';
  height:100%;
  position: absolute;
  left:-2000px;
  background-color:${variable.brand3};
  width: 2000px;
  top: 0px;
}
@media (max-width: ${variable.tabletWidth}) {
  flex-basis:40%;
}
@media (max-width: ${variable.mobileWidth}) {
  flex-basis:100%;
  padding-left:0px;
  padding-right:0px;
  &:after {
    content:'';
    height:100%;
    position: absolute;
    right:-2000px;
    background-color:${variable.brand3};
    width: 2000px;
    top: 0px;
  }
}
`
const Rightfooter = styled.div`
flex-basis:70%;
padding:40px 0px;
position:relative;
padding-left:20px;
color:white;
h4{
  color:white;
  margin:0px;
}
@media (max-width: ${variable.tabletWidth}) {
  flex-basis:60%;
}
@media (max-width: ${variable.mobileWidth}) {
  flex-basis:100%;
  padding-left:0px;
  padding-right:0px;
}
`

const Footer = () => (
  <footer style={{
    backgroundColor:variable.darkGray,
    overflow:'hidden',
    }}>
    <Container style={{
      display:'flex',
      flexWrap:'wrap',
    }}>
      <Leftfooter>
      <h4>CONTACT US</h4>
      <p>P.O Box 471</p>
      <p>St. Croix Falls, WI 54024</p>
      <p>651-399-9164</p>
      </Leftfooter>
      <Rightfooter>
      <h4>ABOUT US</h4>
      <p>1986.io is a small web development / design / marketing firm based in America! We're real humans ready to chat face to face.</p>
      </Rightfooter>
    </Container>
  </footer>
)


export default Footer
