import mongoose from "mongoose";
import Kitten from "../src/models/kitten";

require('dotenv-flow').config();
mongoose.set('strictQuery', true);

export default function (globalConfig, projectConfig) {
    return new Promise(((resolve, reject) => {
        mongoose.connect(process.env.DATABASE_URL,async function() {
            /* Drop the DB */
            console.log("\nClear collections")
            await Kitten.deleteOne({})
            await mongoose.connection.close()
            console.log("Collections cleared")
            resolve()
        })
    }))

};