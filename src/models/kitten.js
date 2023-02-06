const mongoose = require('mongoose');

const kittySchema = new mongoose.Schema({
    name: String
});


export default mongoose.model('Kitten', kittySchema);