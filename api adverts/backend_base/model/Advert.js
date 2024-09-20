const mongoose = require('mongoose');

const AdvertSchema = mongoose.Schema({
    title: String,
    type: String,
    price: Number,
    city: String,
    delegation: String,
    category: String,
    subCategory: String,
    productCondition: String,
    imageAdvert: String

})
module.exports = mongoose.model('Advert', AdvertSchema);