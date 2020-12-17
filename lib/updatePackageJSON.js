const fs = require("fs-extra")
const path = require("path")
const jsonFormat = require("json-format")

module.exports = function updatePackageJson(projectPath, projectName) {
  const pathPackageJSON = path.resolve(projectPath, "package.json")
  if (fs.existsSync(pathPackageJSON)) {
    const packageJSON = require(pathPackageJSON)
    packageJSON.name = projectName
    fs.writeFileSync(pathPackageJSON, jsonFormat(packageJSON))
  }
}
