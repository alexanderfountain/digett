import Container from "../../../components/layout/container"
import React from "react";
import styled from "styled-components";

const SectionHeroStyle = styled.section`
  padding-top: 150px;
  padding-bottom: 50px;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 400px;
  h1{
    text-align:center;
  }
`;

const SectionHero = ({bgimage, h1}) => (
<SectionHeroStyle id="hero" style={{backgroundImage: `url(${bgimage})`,}}>
<Container>
  <h1>{h1}</h1>
</Container>
</SectionHeroStyle>
)

export default SectionHero