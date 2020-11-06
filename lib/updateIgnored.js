const fs = require("fs-extra")

module.exports = function updateIgnored() {
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
