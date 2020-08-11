import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
import Gallery from '../components/Gallery'
// import Image from '../components/Image'
// import Lightbox from 'react-images'


const HomeIndex = ({ data, path }) => {
  console.log('🤿 data', data)
  const projects = data.projectFiles.edges.map(
    edge => edge.node.childMarkdownRemark
  )
  console.log('projecthtml', projects);
  const allImages = data.allImages.edges.map(edge => edge.node)
  //   console.log('🤿 projects', projects)
  //   console.log('🤿 allImages', allImages)
  const siteTitle = 'Dalton Buckingham'
  const siteDescription = 'Portfolio'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h1>
              Dalton Buckingham
            </h1>
          </header>
          <p>
            Front End Engineer with 5+ years of experience building responsive websites and applications.
          </p>
          {/* <ul className="actions">
            <li>
              <a href="#" className="button">
                Learn More
              </a>
            </li>
          </ul> */}
        </section>

        <section id="two">
          <h2>Projects</h2>
          <Gallery projects={projects} allImages={allImages} />
        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <div className="row">
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-mobile">
                    <span className="label">Phone</span>
                  </h3>
                  <a href="tel:949-500-7340">949-500-7340</a>
                </li>
                <li>
                  <h3 className="icon fa-envelope-o">
                    <span className="label">Email</span>
                  </h3>
                  <a href="mailto:daltonrbuckingam@gmail.com">daltonrbuckingham@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex

export const pageQuery = graphql`
  query {
    projectFiles: allFile(
      filter: {
        sourceInstanceName: { eq: "markdown" }
        relativeDirectory: { eq: "projects" }
      }
      sort: { fields: childMarkdownRemark___frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          childMarkdownRemark {
            id
            html
            excerpt
            frontmatter {
              title
              path
              date
              images
            }
          }
        }
      }
    }
    allImages: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
      edges {
        node {
          name
          id
          relativePath
          publicURL
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`
