const chalk = require("chalk");
import { createInterface } from "readline";


export class ConsoleHelper {
    emptyAsk = ""

    constructor() {
        this.readline = createInterface({
            input: process.stdin,
            output: process.stdout
        })
    }

    title(title) {
        this.writeLine(chalk.yellow(title))
        this.writeLine(chalk.yellow("=".repeat(title.length)))
    }

    writeLine(message) {
        this.readline.write(message + "\n")
    }

    error(message) {
        this.writeLine(chalk.bgRed.black(message))
    }

    info(message) {
        this.writeLine(chalk.bgBlue.black(message))
    }

    success(message) {
        this.writeLine(chalk.bgGreen.black(message))
    }

    warning(message) {
        this.writeLine(chalk.bgYellow.black(message))
    }

    async ask(question, defaultValue = null) {
        return new Promise(((resolve, reject) => {
            let endQuestion = ":"
            if (null !== defaultValue) {
                endQuestion = `${chalk.yellow("[" + defaultValue + "]")} ${endQuestion}`
            }
            this.readline.question(`${chalk.green(question)} ${endQuestion} `, response => {
                resolve(response === this.emptyAsk ? defaultValue : response)
            })
        }))
    }

    async confirm(question, defaultValue = false) {
        return this.ask(question, defaultValue)
    }
}