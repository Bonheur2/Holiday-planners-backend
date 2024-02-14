import tourRouter from "./tourendpoints.js";
import express from "express";

const mainRouter = express.Router();
mainRouter.use("/tour", tourRouter)
export default mainRouter;