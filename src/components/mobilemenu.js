import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'gatsby'
import styled from "styled-components"
import * as variable from './variables.js'
const MobileContainer = styled.div`
  display:none;
  position:relative;
  @media (max-width: ${variable.tabletWidth}) {
    display:block;
  }
`;
const Mobilemenu = () => (
  <MobileContainer>
  <a href="#" className="bm-burger-button .hamburger-box">
  </a>
  <Menu right>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/contact">Contact</Link></li>
  </Menu>
  </MobileContainer>
)

export default Mobilemenu

