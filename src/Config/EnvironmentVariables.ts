import dotenv from "dotenv";

dotenv.config();

export const EnvironmentVariables = {
  PORT: process.env.PORT as string,
  MongoDB_URL: process.env.LIVE_URL as string,
  GOOGLE_ID: process.env.GOOGLE_ID as string,
  GOOGLE_SECRET: process.env.GOOGLE_SECRET as string,
};
