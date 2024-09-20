const express = require('express');

const ConnectDb = require('./config/ConnectDb');
const advertRoute = require('./routes/AdvertRoutes')
const advertSchema = require('./model/Advert');

const app = express();
const port = 5000;

app.use(express.json());

ConnectDb();

// Route principale pour les annonces
app.use('/advert', advertRoute);

app.listen(port, () => {
    console.log(`The application is correctly running on port ${port}`);
})