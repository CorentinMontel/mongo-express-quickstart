import mongoose from "mongoose";
import config from "../../config";

export default function (app) {
    app.use(async (req, res, next) => {
        // Open connection
        await mongoose.connect(config.DATABASE_URL);

        // On response finish, close database connection
        res.on("finish", async () => {
            await mongoose.connection.close()
        });
        next()
    })
}