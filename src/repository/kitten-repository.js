import Kitten from "../models/kitten";

class KittenRepository {
    async findByName(name) {
        return Kitten.findOne({name: name})
    }
}

export default new KittenRepository()