const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    imgUrl: { type: String, required: true },
    name: { type: String, required: true },
    team: { type: String, required: true },
    nationality: { type: String, required: true },
    jerseyNumber: { type: Number, required: true },
    age: { type: Number, required: true },
});

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;
