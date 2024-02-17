import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'

export const signup = async (req,resp) => {
  const {userName, email, password} = req.body;
  const hashedPassword = bcryptjs.hashSync(password,10)
  const newUser = new User({userName, email, password:hashedPassword})
  try {
    await newUser.save()
  resp.status(201).json("user created successfully")
  } catch (error) {
    resp.status(500).json(error.message)
  }
}
