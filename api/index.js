const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const app = express()
dotenv.config()

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connecteed to MongoDB!');
}).catch((err)=>{
    console.log(err);
})


app.listen(5000, () => {
    console.log("Server is running on port: 5000");
})
