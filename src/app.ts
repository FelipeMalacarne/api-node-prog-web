import { Application } from "express";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes";

const config = {
    mongoURI: 'mongodb+srv://felipemalacarne012:5eKr03qIHL0Xn8Yi@aula-api.jjq2o07.mongodb.net/?retryWrites=true&w=majority&appName=aula-api',
}

const app: Application = express();

mongoose.connect(config.mongoURI)
    .then(() => console.log('Conectado ao banco de dados'))
    .catch(err => console.log(err));

app.use('/users', userRoutes);

export default app;


