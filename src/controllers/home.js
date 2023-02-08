import Kitten from "../models/kitten";
import {ApiResponder} from "../services/http";
import {appLogger} from "../services/logger";

export default {
    /**
     * @param {Request} req
     * @param {Response} res
     * @return {Promise<void>}
     */
    home: [
        async (req, res) => {
            const silence = new Kitten({ name: 'Silence' });
            await silence.save()

            appLogger.info("Someone requested home controller")

            new ApiResponder(res).sendOk({message: "It's really ok bruh"})
        }
    ]
}