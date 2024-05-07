import cors from 'cors';
import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware";
import userRoutes from "./routes/userRoutes";
import gameDataRoutes from "./routes/gameDataRoutes";

const port = process.env.PORT || 5000;

const frontEndUrl = process.env.FRONTEND_URL;

connectDB();

const app = express();

const corsOptions = {
  origin: frontEndUrl,
  optionsSuccessStatus: 200,
  credentials: true
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/users", userRoutes);
app.use("/api/game-data", gameDataRoutes);

app.get('/up-check', (_req, res: any) => {
  res.status(200).send("<h1>AUTOHACK IDLE BACKEND OPERATION NORMAL</h1>").end();
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port: ${port}`));
