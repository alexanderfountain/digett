import React from "react";
import styled from "styled-components";
import Container from "../../layout/container";
import showdown from "showdown"

const converter = new showdown.Converter()

const SectionMarkdownStyle = styled.section`

`;



const SectionMarkdown = ({object}) => (

<SectionMarkdownStyle>
<Container>
  <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(object.markdown) }} />
</Container>
</SectionMarkdownStyle>
)

export default SectionMarkdown