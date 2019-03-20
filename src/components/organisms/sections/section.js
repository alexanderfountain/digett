import React from "react";
import styled from "styled-components";
import Container from "../../layout/container";
import SectionType from "../sections/section-type"

const SectionStyle = styled.section`
  padding-top: 150px;
  padding-bottom: 50px;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 400px;
  background-image: url(${props => props.backgroundimage});
  background-color: ${props => props.backgroundcolor};
  color: ${props => props.color};
  h1 ,h2, h3, h4, h5, h6{
    margin: 0px;
    color: ${props => props.color};
  }
  .subheading{
    font-size: 28px;
    font-weight: 300;
  }
`;

const Section = ({section}) => {
  return(
      <SectionStyle id={section.sectionid}
      backgroundimage={section.backgroundimage}
      backgroundcolor={section.backgroundcolor}
      color={section.textcolor}
      >
      <Container>
      <h2>{section.sectiontitle}</h2>
      {section.sectionvalue.map(( sectionvalue, index ) => (
        <SectionType 
          key={index}
          object={sectionvalue}
          >
        </SectionType>
      ))}
      </Container>
    </SectionStyle>
  )
}
export default Section