import * as fs from "fs";
import * as path from "path";
import {ConsoleHelper} from "./services/console";

if (process.argv.length < 3) {
    console.warn("You should specify a command as first argument")
    process.exit(1)
}

const commandName = process.argv[2]
const commandPath = './src/command/' + commandName + ".js"

if (! fs.existsSync(commandPath)) {
    console.warn(`Command "${commandName}" does not exists`)
    process.exit(1)
}
(async () => {
    const command = require('./command/' + commandName).default
    const io = new ConsoleHelper()
    await command.execute(io)
    io.readline.close()
})();