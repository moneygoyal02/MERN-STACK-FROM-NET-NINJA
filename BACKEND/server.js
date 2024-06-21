require('dotenv').config()
const express = require('express');
const workoutRouters = require('./routes/workouts')
const mongoose = require('mongoose')

// express app
const app =  express();



//? MIDDLEWARE
app.use(express.json())
app.use((req,res,next) =>{
    console.log(req.path , req.method);
    next();
    
})

// connect to db

mongoose.connect(process.env.MONGO_URI)
.then(() => {

    //listen for requests

app.listen(process.env.PORT, () => {
    console.log(' connected to db & listen on port :',process.env.PORT); 
})

})
.catch((error) => {
    console.log(error)
    
})

//? Routes
app.use('/api/workouts',workoutRouters);   
