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

  const Users = await UserModels.findByIdAndUpdate(
    {req.params.userID}, {username}, {new: true}
  ),

  return res.status(201).json({
    message: "Successfully Updated User",
    data: Users,
  });
};

// Get all user
export const GetAllUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserModels.find();

    if (!user) {
      return res.status(404).json({
          message: "Couldn't get all users",
        });
    }

    return res.status(200).json({
      message: "Successfully got all users",
      data: user,
    });
}

// Get one user
export const GetSingleUser = async (req: Request, res: Response, next: NextFunction) => {
      const singleuser = await UserModels.findById(req.params.userID);

      if (!singleuser) {
        return res.status(404).json({
            message: "User with this account does not exist",
          });
      }
  
      return res.status(200).json({
        message: "Successfully got this single user",
        data: singleuser,
      });
}


// Delete a user
