const fs = require("fs-extra")
const path = require("path")

const template = (str) => path.resolve("package/templates", str)
const main = (str) => path.resolve("package/main", str)
const pure = (str) => path.resolve("package/pure", str)

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
    from: template("vue2-runtime/yarn.lock"),
    to: template("vue2-runtime/yarnlock"),
  },
  {
    from: template("vue2-runtime/.gitignore"),
    to: template("vue2-runtime/gitignore"),
  },
  {
    from: template("vue3-runtime/yarn.lock"),
    to: template("vue3-runtime/yarnlock"),
  },
  {
    from: template("vue3-runtime/.gitignore"),
    to: template("vue3-runtime/gitignore"),
  },
  {
    from: main(".gitignore"),
    to: main("gitignore"),
  },
  {
    from: main("yarn.lock"),
    to: main("yarnlock"),
  },
  {
    from: pure(".gitignore"),
    to: pure("gitignore"),
  },
  {
    from: pure("yarn.lock"),
    to: pure("yarnlock"),
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
