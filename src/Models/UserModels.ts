import { Schema, model } from "mongoose";

import isEmail from "validator/lib/isEmail";

import { IUSER } from "../Interfaces/Interfaces";

const UserSchema: Schema<IUSER> = new Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a suitable username"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Please enter your Password"],
    },
    verified: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const UserModels = model<IUSER>("Users", UserSchema);

export default UserModels;
