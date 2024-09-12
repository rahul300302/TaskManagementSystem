const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');


module.exports.config = {
    PORT: process.env.PORT || 3000,
    JWT_SECRET: 'radsfgtshyagajgsjsh'
};
mongoose.set('debug', true);
mongoose.connect("mongodb+srv://rahulraw2002:g9qIYXGNoc3JcQJV@taskmanagemnet.bai3b.mongodb.net/?retryWrites=true&w=majority&appName=taskmanagemnet", {
    useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 30000
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));