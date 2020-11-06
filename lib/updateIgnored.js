const fs = require("fs-extra")
const path = require("path")

module.exports = function updateIgnored(projectName) {
  const appDirectory = fs.realpathSync(process.cwd())
  const resolveApp = (relativePath) => path.resolve(appDirectory + `/${projectName}`, relativePath)
  const gitIgnorePathFake = resolveApp("gitignore")
  const gitIgnorePath = resolveApp(".gitignore")
  const gitignoreExists = fs.existsSync(gitIgnorePath)
  const yarnLockPathFake = resolveApp("yarnlock")
  const yarnLockPath = resolveApp("yarn.lock")
  const yarnLocExists = fs.existsSync(yarnLockPath)

  if (yarnLocExists) {
    fs.removeSync(yarnLockPath)
  }
  fs.moveSync(yarnLockPathFake, yarnLockPath, [])
  if (gitignoreExists) {
    // Append if there's already a `.gitignore` file there
    const data = fs.readFileSync(gitIgnorePathFake)
    fs.appendFileSync(gitIgnorePath, data)
    fs.unlinkSync(gitIgnorePathFake)
  } else {
    // Rename gitignore after the fact to prevent npm from renaming it to .npmignore
    // See: https://github.com/npm/npm/issues/1862
    fs.moveSync(gitIgnorePathFake, gitIgnorePath, [])
  }
}
