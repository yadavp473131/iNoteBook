const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://yadavp8120:12345678py@cluster0.knfynty.mongodb.net/inotebook";

const connectToMongo = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(mongoURI, ()=>{  
        console.log("connected to mongo successfully");
   });
}

module.exports = connectToMongo;
