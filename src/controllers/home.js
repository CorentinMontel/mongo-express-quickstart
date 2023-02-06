import Kitten from "../models/kitten";
import {ApiResponder} from "../services/http";

export default {
    /**
     * @param {Request} req
     * @param {Response} res
     * @return {Promise<void>}
     */
    home: async (req, res) => {
        const silence = new Kitten({ name: 'Silence' });
        await silence.save()

        new ApiResponder(res).sendNotFound()
    }
}