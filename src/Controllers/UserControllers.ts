// Create User:
export const UsersRegistration = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const { name, email, phoneNumber, username, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const findEmail = await UserModels.findOne({ email });

  if (findEmail) {
    next(
      new AppError({
        message: "User with this account already exists",
        httpcode: HTTPCODES.FORBIDDEN,
      })
    );
  }

  const Users = await UserModels.create({
    name,
    email,
    username,
    phoneNumber: "234" + phoneNumber,
    password: hashedPassword,
    confirmPassword: hashedPassword,
    status: "User",
  });

  return res.status(201).json({
    message: "Successfully created User",
    data: Users,
  });
};
