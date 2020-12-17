const fs = require("fs")
const path = require("path")
const copyDirSync = require("../lib/copy").copyDirSync
const updateIgnored = require("../lib/updateIgnored")
const updatePackageJSON = require("../lib/updatePackageJSON")

module.exports = function create(appType, appName, options) {
  const appDirectory = fs.realpathSync(process.cwd())
  const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath)
  const targetPath = resolveApp(`src/apps/${appName}`)
  const tsconfigPath = resolveApp("tsconfig.json")
  const ownPath = resolveApp("templates/react")
  const { isBuildin } = options

  const templates = {
    react: "../package/templates/react-runtime",
    vue2: "../package/templates/vue2-runtime",
    vue3: "../package/templates/vue3-runtime",
    "react-buildin": "../package/templates/react-buildin",
  }

  const appTypeReal = appType + (isBuildin ? `-buildin` : "")

  if (templates[appTypeReal]) {
    if (isBuildin) {
      copySync(templates[appTypeReal], resolveApp(`src/apps/${appName}`))
    } else {
      copySync(templates[appTypeReal], resolveApp(appName))
      updatePackageJSON(resolveApp(appName), appName)
      updateIgnored(appName)
    }
  } else {
    console.log(`No match to the ${appType} app type, check it please!`)
    return
  }

  function copySync(templatePath, targetPath) {
    copyDirSync(
      path.resolve(__dirname, templatePath),
      targetPath,
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

  // new Promise((resolve, reject) => {
  //   fs.stat(ownPath, (err, stats) => {
  //     if (err) {
  //       // no template，use package's template
  //       reject(err)
  //     } else {
  //       // have template
  //       resolve(stats)
  //     }
  //   })
  // }).then(
  //   (stats) => {
  //     if (stats && stats.isDirectory()) {
  //       if (fs.existsSync(path.resolve(ownPath, "app.tsx"))) {
  //         // Judge whether there are app.tsx for joining to the project
  //         copyDirSync(ownPath, targetPath)
  //         updateTsconfig(tsconfigPath, name)
  //       } else {
  //         console.log("your app template have no app.tsx")
  //       }
  //     } else {
  //       console.log(ownPath + " is not a directory.")
  //     }
  //   },
  //   (e) => {
  //     copyDirSync(templatePath, targetPath)
  //     updateTsconfig(tsconfigPath, name)
  //   }
  // )
}
