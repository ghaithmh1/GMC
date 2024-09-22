const express = require('express');
const router = express.Router();
const PlayerControllers = require('../controllers/PlayerControllers');

router.get('/', PlayerControllers.getPlayers);           // Get all players
router.post('/', PlayerControllers.addPlayer);           // Add a new player
router.put('/:id', PlayerControllers.modifyPlayer);      // Modify a player by ID
router.delete('/:id', PlayerControllers.deletePlayer);    // Delete a player by ID

module.exports = router;
