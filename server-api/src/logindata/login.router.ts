import express, { Request, Response } from "express";
import * as ItemService from "./login.service";
import { Login, BaseLogin } from "./login.interface";

export const loginRouter = express.Router();