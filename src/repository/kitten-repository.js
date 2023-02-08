import Kitten from "../models/kitten";

class KittenRepository {
    async findByName(name) {
        return Kitten.findOne({name: name}).exec()
    }

    async findCollection() {
        return Kitten.find()
    }
}

export default new KittenRepository()