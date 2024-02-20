import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import Listing from "../models/listing.model.js";

export const test = (req, resp) => {
  resp.json({
    message: "Api route is working...",
  });
};

export const updateUser = async (req, resp, next) => {
  if (req.user.id !== req.params.id)
    return next(errorHandler(401, "You can only update your own account"));
  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          userName: req.body.userName,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
        },
      },
      { new: true }
    );

    const { password, ...rest } = updatedUser._doc;

    resp.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, resp, next) => {
  if(req.user.id !== req.params.id)
    return next(errorHandler(401, 'You can only delete your own account!'))
  try {
    await User.findByIdAndDelete(req.params.id)
    resp.clearCookie('access_token')
    resp.status(200).json('User has been deleted!')
  } catch (error) {
    next(error)
  }
}

export const getUserListings = async (req,resp, next) => {
   if(req.user.id === req.params.id){
      try {
        const listings = await Listing.find({userRef : req.params.id})
        resp.status(200).json(listings)
      } catch (error) {
        next(error)
      }
   }else{
      return next(errorHandler(401, 'You can only view your own listing!'))
   }
}

