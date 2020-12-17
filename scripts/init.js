const fs = require("fs")
const path = require("path")
const copyDirSync = require("../lib/copy").copyDirSync
const updateIgnored = require("../lib/updateIgnored")
const updatePackageJSON = require("../lib/updatePackageJSON")

module.exports = function init(projectName, options) {
  const appDirectory = fs.realpathSync(process.cwd())
  const resolveApp = (relativePath) => path.resolve(appDirectory + `/${projectName}`, relativePath)
  const { isBuildin } = options

  if (isBuildin) {
    copyDirSync(
      path.resolve(__dirname, "../package/main"),
      resolveApp(""),
      // 本地调试请打开注释
      (statsname, from) => {
        if (from.match("node_modules")) {
          return false
        } else {
          return true
        }
      }
    )
  } else {
    copyDirSync(
      path.resolve(__dirname, "../package/pure"),
      resolveApp(""),
      // 本地调试请打开注释
      (statsname, from) => {
        if (from.match("node_modules")) {
          return false
        } else {
          return true
        }
      }
    )
  }
  updatePackageJSON(resolveApp(""), projectName)
  updateIgnored(projectName)
}
