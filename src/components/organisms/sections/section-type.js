import React from "react";
import styled from "styled-components";
import SectionMarkdown from "../sections/section-markdown"
import BlogList from "../sections/section-bloglist"

const SectionType = ({object}) => {
 
  switch(object.type){
    case 'markdown':
    return <SectionMarkdown
    object={object}
    ></SectionMarkdown>;
    case 'bloglist':
    return <BlogList></BlogList>
  }
  return(
    null
  )
}

export default SectionType