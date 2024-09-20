const express = require('express');
const advertRoute = express.Router();

const { getadverts, deleteadvert, modifyadvert, getadvert, addadvert } = require('../controllers/AdvertControllers');

advertRoute.use(express.json());

// Add a new advert
//http://localhost:5000/advert/addAdvert
advertRoute.post('/addAdvert', addadvert);

// Get an advert by ID
//http://localhost:5000/advert/getAdvertById/:id
advertRoute.get('/getAdvertById/:id', getadvert);

// Update an advert by ID
//http://localhost:5000/advert/updateAdvert/:id
advertRoute.put('/updateAdvert/:id', modifyadvert);

// Delete an advert by ID
//http://localhost:5000/advert/deleteAdvert/:id
advertRoute.delete('/deleteAdvert/:id', deleteadvert);

// Get all adverts
//http://localhost:5000/advert/allAdverts
advertRoute.get('/allAdverts', getadverts);

module.exports = advertRoute;
