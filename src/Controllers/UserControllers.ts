import { Request, Response, NextFunction } from "express";

import bcrypt from "bcrypt";

import UserModels from "../Models/UserModels";

// Create User:
export const UsersRegistration = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const { email, username, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const findEmail = await UserModels.findOne({ email });

  if (findEmail) {
    return res.status(404).json({
      message: "User with this account already exists",
    });
  }

  const Users = await UserModels.create({
    email,
    username,
    password: hashedPassword,
  });

  return res.status(201).json({
    message: "Successfully created User",
    data: Users,
  });
};

// Update User:
export const UpdateUser = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const user = await UserModels.findById(req.params.userID);

  const { username } = req.body;

  if (!user) {
    return res.status(404).json({
      message: "User with this account does not exist",
    });
  }

  const Users = await UserModels.create({
    email,
    username,
    password: hashedPassword,
  });

  return res.status(201).json({
    message: "Successfully created User",
    data: Users,
  });
};

//   Get all user
//Get one user
