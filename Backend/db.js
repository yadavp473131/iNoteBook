const mongoose = require('mongoose');


const mongoURI = process.env.MONGODB_URI;

const connectToMongo = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(mongoURI, ()=>{  
        console.log("connected to mongo successfully");
   });
}

module.exports = connectToMongo;
