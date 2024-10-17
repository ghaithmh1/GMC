const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PlayerController = require('./Controllers/PlayerControllers');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/deatab', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

app.use('/players', PlayerController);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
