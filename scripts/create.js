const fs = require("fs")
const path = require("path")
const shell = require("shelljs")

module.exports = function create(type, name) {
  const appDirectory = fs.realpathSync(process.cwd())
  const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)
  const targetPath = resolveApp(`src/apps/${name}`)
  const tsconfigPath = resolveApp("tsconfig.json")
  if (type === "react") {
    const templatePath = path.resolve(__dirname, "../package/templates/react")
    const ownPath = resolveApp("templates/react")

    new Promise((resolve, reject) => {
      fs.stat(ownPath, (err, stats) => {
        if (err) {
          // no template，use package's template
          reject(err)
        } else {
          // have template
          resolve(stats)
        }
      })
    }).then(
      (stats) => {
        if (stats && stats.isDirectory()) {
          if (fs.existsSync(path.resolve(ownPath, "app.tsx"))) {
            // Judge whether there are app.tsx for joining to the project
            copyDirSync(ownPath, targetPath)
            updateTsconfig(tsconfigPath, name)
          } else {
            console.log("your app template have no app.tsx")
          }
        } else {
          console.log(ownPath + " is not a directory.")
        }
      },
      (e) => {
        copyDirSync(templatePath, targetPath)
        updateTsconfig(tsconfigPath, name)
      }
    )
  }
}

function updateTsconfig(path, name) {
  const tsconfigJSON = require(path)
  if (tsconfigJSON) {
    // "@type/*": ["src/type/*"]
    tsconfigJSON.compilerOptions.paths[`@${name}/*`] = [`src/${name}/*`]
    fs.writeFileSync(path, JSON.stringify(tsconfigJSON))
    shell.exec(`prettier --write ${path}`)
  }
}
