import {ApiResponder} from "../services/http";
import KittenRepository from "../repository/kitten-repository";

export default {
    kittenItem: async (req, res) => {
        const kitten = KittenRepository.findByName(req.params.name)

        new ApiResponder(res).sendOk(kitten)
    }
}