const dotenv=require('dotenv');
dotenv.config();
const mongoose = require('mongoose');


module.exports.config = {
    PORT: process.env.PORT || 3000,
    JWT_SECRET:'radsfgtshyagajgsjsh',
    MONGODB_URI: 'mongodb+srv://rahulraw2002:rahulraw2002@cluster0.mongodb.net/taskManagement?retryWrites=true&w=majority'}; 

    mongoose.connect("mongodb+srv://rahulraw2002:g9qIYXGNoc3JcQJV@taskmanagemnet.bai3b.mongodb.net/?retryWrites=true&w=majority&appName=taskmanagemnet", {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
      .then(() => console.log('MongoDB connected'))
      .catch(err => console.error('MongoDB connection error:', err));