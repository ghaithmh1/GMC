const mongoose = require('mongoose');
require('dotenv').config();

const ConnectDb = async () => {
    try {
        await mongoose.connect(process.env.DATA_BASE_CONFIG);
        console.log('You are connected to your database e_annonce');
    } catch (err) {
        console.log(err)
    }
}

module.exports = ConnectDb;