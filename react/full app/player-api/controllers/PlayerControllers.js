const express = require('express');
const Player = require('./PlayerModel');

const router = express.Router();

// Get all players
router.get('/', async (req, res) => {
    try {
        const players = await Player.find();
        res.json(players);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a player
router.post('/', async (req, res) => {
    const player = new Player(req.body);
    try {
        const savedPlayer = await player.save();
        res.status(201).json(savedPlayer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Update a player
router.put('/:id', async (req, res) => {
    try {
        const updatedPlayer = await Player.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedPlayer);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a player
router.delete('/:id', async (req, res) => {
    try {
        await Player.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
