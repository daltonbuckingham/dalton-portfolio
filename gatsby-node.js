/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// const fs = require('fs')
// const path = require("path")

// exports.onPostBuild = () => {
//   fs.renameSync(path.join(__dirname, "public"), path.join(__dirname, "docs"))
// }

const fs = require('fs-extra')

exports.onPostBuild = () => {
  fs.copySync('public', 'docs')
}

// copy file
// fs.copySync('public', 'docs')