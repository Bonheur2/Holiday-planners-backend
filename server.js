import mongoose from "mongoose"
import mainRouter from "./src/endpoints/indexrouter.js";
import express from "express"
import bodyParser from "body-parser";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(bodyParser.json())
app.use("/holidayplanners",mainRouter)
mongoose.connect(process.env.dbconnect)
  .then(() => {
    console.log("Database connected");
  })
  .catch(error => {
    console.error("Error connecting to database:", error);
  });
app.listen(process.env.port,()=>{
    console.log(`Server listening on: http://localhost:${process.env.PORT}`);

})
  