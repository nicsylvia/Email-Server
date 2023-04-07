import express, { Response, Request, Application } from "express";
import morgan from "morgan";

import cors from "cors";

export const APPCONFIG = (app: Application) => {
  app.use(express.json());
  app.use(cors());
  app.use(morgan("dev"));
};
