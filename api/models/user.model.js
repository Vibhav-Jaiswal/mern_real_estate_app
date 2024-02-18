import mongoose from'mongoose'

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    avatar:{
        type:String,
        default:"https://www.bing.com/th?id=OIP.GHGGLYe7gDfZUzF_tElxiQHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.2&pid=3.1&rm=2"
    },
},  {timestamps:true})

export default mongoose.model('users',userSchema)