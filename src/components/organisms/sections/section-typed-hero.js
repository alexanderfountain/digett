import React from "react";
import styled from "styled-components";
import Typing from "react-typing-animation";
import Container from "../../layout/container";
import Fade from "react-reveal/Fade";
import Styledlink from "../../atoms/link"

const SectionHeroStyle = styled.section`
  padding-top: 150px;
  padding-bottom: 50px;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 400px;
  h3{
    margin: 0px;
    color: #232525;
  }
  .subheading{
    font-size: 28px;
    font-weight: 300;
  }
`;

const SectionTypedHero = ({bgimage, introfirst, introsecond, subheading, buttonlink, buttontext}) => (
<SectionHeroStyle id="typed-hero" style={{backgroundImage: `url(${bgimage})`,}}>
<Container>
<Fade bottom>
    <Typing>
        <h3>{introfirst}</h3>
        <Typing.Delay ms={3000} />
        <Typing.Backspace count={20} />
        <h3>{introsecond}</h3>
    </Typing>
    <div className="subheading">{subheading}</div>
    <Styledlink to={buttonlink} text={buttontext}></Styledlink>
</Fade>
</Container>
</SectionHeroStyle>
)

export default SectionTypedHero