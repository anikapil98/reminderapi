const express= require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const reminderRoute= require('./routes');
//initialize ezpress app
const app =express();
const PORT = 5000;

//middleware
app.use(bodyParser.json());

const dbPassword = 'Lucky9821'; // Replace with your actual password
const dbConnectionURL = `mongodb+srv://99animeshsingh:${dbPassword}@cluster0.w4wi8zg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Database connectivity
mongoose.connect(dbConnectionURL);
const db = mongoose.connection;

db.on('error',console.error.bind(console,"mongo db connection done successfully"));
db.once('open', ()=>{
    console.log('connected to mongodb');
});

// define reminder schema and model




//api endpoint to save a reminder



app.use('/api',reminderRoute);


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});

