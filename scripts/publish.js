const fs = require("fs-extra")
const path = require("path")

const template = (str) => path.resolve("package/templates", str)
const main = (str) => path.resolve("package/main", str)

const updateArr = [
  {
    from: template("react-runtime/yarn.lock"),
    to: template("react-runtime/yarnlock"),
  },
  {
    from: template("react-runtime/.gitignore"),
    to: template("react-runtime/gitignore"),
  },
  {
    from: template("vue-runtime/yarn.lock"),
    to: template("vue-runtime/yarnlock"),
  },
  {
    from: template("vue-runtime/.gitignore"),
    to: template("vue-runtime/gitignore"),
  },
  {
    from: main(".gitignore"),
    to: main("gitignore"),
  },
  {
    from: main("yarn.lock"),
    to: main("yarnlock"),
  },
]

updateArr.forEach((item) => {
  const fileExists = fs.existsSync(item.from)
  if (fileExists) {
    if (fs.existsSync(item.to)) {
      fs.removeSync(item.to)
    }
    ;(item.replace ? fs.moveSync : fs.copyFileSync)(item.from, item.to)
  }
})
