import express from "express";
import { dbConnection } from "./database/dbConnection.js";
//import dotenv from "dotenv"
const app = express();
import messageRouter from "./router/messageRouter.js";
import cors from 'cors';



// const allowedOrigins = [ 'http://localhost:5173'];

// const options: cors.CorsOptions = {
//   origin: allowedOrigins
// };

app.use(cors(
    {
    origin: 'http://localhost:5173',
    methods: ["POST"],
    credentials: true,
    }
));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", messageRouter);

dbConnection();
//dotenv.config({path: './config/config.env'});

export default app;
