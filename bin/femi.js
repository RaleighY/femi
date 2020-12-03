#!/usr/bin/env node

const commander = require("commander")
const packageJson = require("../package.json")
const init = require("../scripts/init")
const create = require("../scripts/create")

const program = new commander.Command()
program.version(packageJson.version)

// init the project
program
  .command("init <projectName>")
  .description("create a mirco project")
  .action((projectName) => {
    init(projectName)
  })

// create an mirco app
program
  .command("create-app <type> <name>")
  .description("create a mirco app")
  .action((type, name) => {
    if (type === "react" || type === "vue2" || type === "vue3") {
      create(type, name)
    }
  })

program.parse(process.argv)
