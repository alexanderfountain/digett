import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Header from '../regions/header'
import Footer from '../regions/footer'
import './layout.css';
import Footercopy from '../regions/footercopy';
import PageTransition from 'gatsby-v2-plugin-page-transitions';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            logo
          }
        }
      }
    `}
    render={data => (
      <>
        <Header 
        siteTitle={data.site.siteMetadata.title} 
        logo={data.site.siteMetadata.logo}
        />
        <div>
        <PageTransition>
          {children}
        </PageTransition>
          <Footer />
          <Footercopy />
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
