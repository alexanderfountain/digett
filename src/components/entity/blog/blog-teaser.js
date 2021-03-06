import React from 'react'
import { Link } from 'gatsby'
import * as variable from '../../variables'
import styled from 'styled-components'
import Img from "gatsby-image"


const BlogTeaserContainer = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
padding:50px 0px;
border-bottom: thin solid #eee;
@media (max-width: ${variable.mobileWidth}) {
  flex-direction: column-reverse;
}
`
const BlogTeaserLeft = styled.div`
flex-basis:calc(50% - 20px);
h2{
    margin-top:5px;
}
@media (max-width: ${variable.mobileWidth}) {
  flex-basis:calc(100%);
}
.has-text-primary{
    border-bottom:0px;
}
`
const BlogTeaserRight = styled.div`
flex-basis:calc(50% - 20px);
@media (max-width: ${variable.mobileWidth}) {
  flex-basis:calc(100%);
}
.blog-teaser-image{
    text-align:center;
}
`

const BlogTeaser = ({post, users}) => {
  const created = Date(post.node.fields.created)
return(
<BlogTeaserContainer>
  <BlogTeaserLeft>
  <div className="who">
  <span className="blog-date">{created} / </span> 
  <span className="blog-teaser-author">
  {users.map((user) => (
    <span>
    {post.node.relationships.uid.drupal_id === user.node.drupal_id && <span>{user.node.name}</span>}
    </span>
  ))}
  </span>
  </div>
  <h2>
  <Link className="has-text-primary" to={post.node.fields.slug}>
    {post.node.title}
  </Link>
  </h2>
  <div className="teaser-body">
  {post.node.field_summary.value}
  </div>
  <Link className="btn blog-btn" href="#">
    Read Full Article
  </Link>
  </BlogTeaserLeft>
  <BlogTeaserRight>
  <div className="blog-teaser-image">
  <Img fluid={post.node.relationships.field_image.localFile.childImageSharp.fluid}/>
    </div>
  </BlogTeaserRight>
</BlogTeaserContainer>
)
  }

export default BlogTeaser

