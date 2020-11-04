const fs = require("fs-extra")
const path = require("path")
const copyDirSync = require("../lib/copy").copyDirSync

module.exports = function init(projectName) {
  const appDirectory = fs.realpathSync(process.cwd())
  const resolveApp = (relativePath) => path.resolve(appDirectory + `/${projectName}`, relativePath)

  copyDirSync(
    path.resolve(__dirname, "../package/main"),
    resolveApp(""),
    (statsname, from, a3, a4, a5) => {
      if (from.match("node_modules")) {
        return false
      } else {
        return true
      }
    }
  )

  const gitignoreExists = fs.existsSync(resolveApp(".gitignore"))
  if (gitignoreExists) {
    // Append if there's already a `.gitignore` file there
    const data = fs.readFileSync(resolveApp("gitignore"))
    fs.appendFileSync(resolveApp(".gitignore"), data)
    fs.unlinkSync(resolveApp("gitignore"))
  } else {
    // Rename gitignore after the fact to prevent npm from renaming it to .npmignore
    // See: https://github.com/npm/npm/issues/1862
    fs.moveSync(resolveApp("gitignore"), resolveApp(".gitignore"), [])
  }
  fs.moveSync(resolveApp("yarnlock"), resolveApp("yarn.lock"), [])
}
