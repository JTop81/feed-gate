import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: false, //can remove this comment code after import data to database; check validate inputed function registration
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: false, //can remove this comment code after import data to database; check validate inputed function registration
      min: 2,
      max: 50,
    },
    name: {
      type: String,
      required: true, //can remove this comment code after import data to database; check validate inputed function registration
      min: 2,
      max: 100,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      type: Array,
      default: [],
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,

    city: String,
    state: String,
    country: String,
    phoneNumber: String,
    transactions: Array,
    role: {
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
