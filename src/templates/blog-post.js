import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout/layout'
import Container from '../components/layout/container'
import * as variable from '../components/variables'
import styled from 'styled-components'
import { HTMLContent } from '../components/Content'
import Form from '../components/form'
import Styledbutton from "../components/atoms/link"



const Blogfullcontainer = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`

const Blogleft = styled.div`
flex-basis:70%;
padding-right:20px;
@media (max-width: ${variable.mobileWidth}) {
  flex-basis:calc(100%);
  padding:0px;
}
`
const Blogright = styled.div`
flex-basis:30%;
padding:0px 0px 0px 20px;
text-align:center;
h6{
  margin:10px 0px 20px 0px;
}
@media (max-width: ${variable.mobileWidth}) {
  flex-basis:calc(100%);
  padding:0px;
}
`

export const BlogPostTemplate = ({
  contentComponent,
  title,
  image,
  content,
  date,
  author,
  slug,
}) => {
  const PostContent = contentComponent
  const canonical = `https://1986.io${slug}`
  return (

    <Layout>

<Helmet>
      <meta charSet="utf-8" />
      <title>1986.io | {title}</title>
      <link rel="canonical" href={canonical}></link>
      </Helmet>
      <section className="section" style={{paddingBottom:'40px'}}>
      <Container>
      <Blogfullcontainer style={{marginTop:'135px'}}>
      <Blogleft>
      <h1 style={{marginTop:'5px'}}>{title}</h1>
      <div className="who" style={{marginBottom:'20px'}}>
        <span className="blog-date">{date} / </span> 
        <span className="blog-teaser-author">{author}</span>
      </div>
      <div><img src={image} /></div>
      <PostContent content={content} />
      </Blogleft>
      <Blogright>
      <Form style={{position:'sticky', top:'145px'}}>
        <h6>Contact Us</h6>
        <p>Fill out the form below.</p>
      <form name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true">
			<input type="hidden" name="form-name" value="contact" />
			<p hidden> <label htmlFor="bot-field">Don’t fill this out:{' '}<input name="bot-field" /> </label> </p>
								<div class="form-group">
									<input type="text" placeholder="Name" name="name" id="name" class="form-control" data-required="true" data-interactive="true" />
								</div>
								<div class="form-group">
									<input type="email" name="email" placeholder="Email" id="email" class="form-control" data-required="true" data-interactive="true" />
								</div>
								<div class="form-group">
									<input type="tel" name="phone" id="phone" placeholder="Phone Number" class="form-control" data-required="false" data-interactive="true" />
								</div>
								<div class="form-group text">
									<textarea name="textarea" id="textarea" placeholder="Message" class="textarea form-control" data-required="true" data-trim="true"/>
								</div>
								<div>
									{/* <Styledlink text="Contact">
                  Contact
                  </Styledbutton> */}
								</div>
							</form>
          </Form>
      </Blogright>
      </Blogfullcontainer>
      </Container>
      </section>
      </Layout>
  )
}

BlogPostTemplate.propTypes = {
  contentComponent: PropTypes.func,
  title: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.string,
  author: PropTypes.string,
  slug: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        frontmatter={post.frontmatter}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        date={post.frontmatter.date}
        author={post.frontmatter.author}
        slug={post.fields.slug}
      />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields{
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        image
        author
      }
    }
  }
`
