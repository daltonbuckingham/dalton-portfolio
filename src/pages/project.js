import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
// import Gallery from '../components/Gallery'

const Project = ({ data, pageContext: { html, frontmatter }, ...props }) => {

  const projects = data.projectFiles.edges.map(
    edge => edge.node.childMarkdownRemark
  )
  // const selectedProject = projects[selectedIndex];
  console.log('projects', projects)
  return (
    <Layout>
      {/* <div id="main"><p>{selectedProject}</p></div> */}
    </Layout>
  )
}

export default Project

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
            frontmatter {
              title
              path
              date
              images
            }
            excerpt
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