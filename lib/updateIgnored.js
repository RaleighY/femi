const fs = require("fs-extra")
const path = require("path")

module.exports = function updateIgnored(projectName) {
  const appDirectory = fs.realpathSync(process.cwd())
  const resolveApp = (relativePath) => path.resolve(appDirectory + `/${projectName}`, relativePath)
  const gitIgnorePath = resolveApp(".gitignore")
  const gitIgnorePathFake = resolveApp("gitignore")
  const gitignoreExists = fs.existsSync(gitIgnorePath)
  const gitignoreFakeExists = fs.existsSync(gitIgnorePathFake)
  const yarnLockPath = resolveApp("yarn.lock")
  const yarnLockPathFake = resolveApp("yarnlock")
  const yarnLockExists = fs.existsSync(yarnLockPath)
  const yarnLockFakeExists = fs.existsSync(yarnLockPathFake)

  // update yarn.lock
  if (yarnLockFakeExists) {
    if (yarnLockExists) {
      fs.removeSync(yarnLockPath)
    }
    fs.moveSync(yarnLockPathFake, yarnLockPath, [])
  }

  // update .gitignore
  if (gitignoreFakeExists) {
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
}
