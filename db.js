const dotenv=require('dotenv');
dotenv.config();

module.exports.config = {
    PORT: process.env.PORT || 3000,
    JWT_SECRET:'radsfgtshyagajgsjsh',
    MONGODB_URI: 'mongodb://127.0.0.1:27017/user-profile-management'}; 
