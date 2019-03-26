import React from "react";
import styled from "styled-components";
import SectionMarkdown from "../sections/section-markdown"

const SectionType = ({object}) => {
 
  switch(object.type){
    case 'markdown':
    return <SectionMarkdown
    object={object}
    ></SectionMarkdown>
  }
  return(
    null
  )
}

export default SectionType