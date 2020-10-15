const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://Prawin:Praveen1@cluster0.ezvgx.mongodb.net/foodDB?retryWrites=true&w=majority';
mongoose.connect(dbURI,{dbName:'foodDB'});
mongoose.connection.on('connected', () => {
    console.log(`Connected to ${dbURI}` );
});

mongoose.connection.on('error', () => {
    console.log("mongoose error : ", err);
})

require('./food')