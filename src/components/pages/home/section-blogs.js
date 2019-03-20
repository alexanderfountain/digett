import * as variable from "../../../components/variables";
import styled from "styled-components";
import React from "react";
import Container from "../../../components/layout/container";
import Form from "../../../components/form";
import Styledbutton from "../../atoms/button"
import BlogTeaser from "../../entity/blog/blog-teaser"

const SectionBlogsStyle = styled.section`
  
`;

const SectionBlogs = ({}) => (
<SectionBlogsStyle id="section-blogs">

    <BlogTeaser>
        Test
    </BlogTeaser>

</SectionBlogsStyle>

)

export default SectionBlogs