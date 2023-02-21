import {ConsoleHelper} from "../services/console";

export default {
    command: "kittens:count",
    name: "Count kittens command",
    description: "Count kittens in database",
    /**
     * @param {ConsoleHelper} io
     */
    execute: async (io) => {
        io.title("Yeah i'm just saying hello for the moment")

        io.error("Something went wrong !")
        io.info("Just an information")
        io.success("Just a success")
        io.warning("Just a warning")

        const res = await io.ask("What ?", "oui")
        console.log(res)
    }
}