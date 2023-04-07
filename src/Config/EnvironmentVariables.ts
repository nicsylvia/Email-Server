import dotenv from "dotenv";

dotenv.config();

export const EnvironmentVariables = {
  PORT: process.env.PORT as string,
  MongoDB_URL: process.env.LIVE_URL as string,
};
