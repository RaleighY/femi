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
  .description("create a mirco frontend main project")
  .option("-b, --buildin", "buildin")
  .action((projectName, command) => {
    const { buildin: isBuildin } = command
    init(projectName, { isBuildin })
  })

// create an mirco app
program
  .command("create-app <appType> <appName>")
  .description("create a mirco frontend sub app")
  .option("-b, --buildin", "buildin")
  .action((appType, appName, command) => {
    const { buildin: isBuildin } = command
    create(appType, appName, { isBuildin })
  })

program.parse(process.argv)
