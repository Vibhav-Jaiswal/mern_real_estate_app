import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

const app = express()
dotenv.config()
app.use(express.json())


mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connecteed to MongoDB!');
}).catch((err)=>{
    console.log(err);
})


app.listen(5000, () => {
    console.log("Server is running on port: 5000");
})


app.use('/api/user',userRouter);

app.use('/api/auth',authRouter);

