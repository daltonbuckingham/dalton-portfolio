/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const fs = require('fs-extra')
// const path = require("path")

exports.onPostBuild = () => {
  // copy file
  fs.copySync('public', 'docs')
  fs.writeFileSync('docs/CNAME', 'daltonbuckingham.com', function (err) {
    if (err) throw err;
  });
}
