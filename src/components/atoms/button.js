import React from "react";
import styled from "styled-components";
import * as variable from "../../components/variables";
import { Link } from "gatsby";
const Buttonstyle = styled.button`
  border: none;
  color: ${variable.brand1};
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
  padding: 21px 34px;
  text-transform: uppercase;
  white-space: normal;
  width: auto;
  display: inline-block;
  margin: 40px 0px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 10px;
  border: 4px solid ${variable.brand1};
  text-transform: uppercase;
  &:hover {
    background-color: ${variable.brand1};
    color: white;
    text-decoration: line-through;
  }
`;

const Styledbutton = ({ text }) => (
  <Buttonstyle>
    {text}
  </Buttonstyle>
);

export default Styledbutton;
