/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const fs = require('fs-extra')

exports.onPostBuild = () => {
  // copy file
  fs.copySync('public', 'docs')
}