  
const mongoose = require('mongoose');

const URI ="mongodb+srv://dbUser:dbUser@cluster0-lbss5.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI,{ 
        useNewUrlParser: true,
        useNewUrlParser: true,
        useUnifiedTopology: true 
         
    });
    console.log('db connected..!')
};


module.exports = connectDB;
//server.listen(80);