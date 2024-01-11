const mongoose = require('mongoose');
require('dotenv').config();

// config module installed as a dependency
const config = require('config');

// get method from config module will let us get any string from the default.json file
const db = process.env.MONGO_URI || config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
        });

        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);

        // Exit process with failure
        process.exit(1);
    }
};

module.exports = connectDB;
