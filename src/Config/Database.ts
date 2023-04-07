import mongoose from "mongoose";

import { EnvironmentVariables } from "./EnvironmentVariables";

const LIVEURI = EnvironmentVariables.MongoDB_URL;

export const DBCONNECTION = async () => {
  try {
    const conn = await mongoose.connect(LIVEURI);
    console.log("");
    console.log(`Database is connected to ${conn.connection.host}`);
  } catch (error) {
    console.log("An error occured in connecting to DB");
  }
};
