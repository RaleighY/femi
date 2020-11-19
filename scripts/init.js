const fs = require("fs")
const path = require("path")
const copyDirSync = require("../lib/copy").copyDirSync
const updateIgnored = require("../lib/updateIgnored")

module.exports = function init(projectName) {
  const appDirectory = fs.realpathSync(process.cwd())
  const resolveApp = (relativePath) => path.resolve(appDirectory + `/${projectName}`, relativePath)

  copyDirSync(
    path.resolve(__dirname, "../package/main"),
    resolveApp("")
    // (statsname, from) => {
    //   if (from.match("node_modules")) {
    //     return false
    //   } else {
    //     return true
    //   }
    // }
  )
  updateIgnored(projectName)
}
