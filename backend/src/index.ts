import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db';

dotenv.config({ path: './.env.development' });
// dotenv.config({ path: './.env.production' });

const mongoURI = process.env.MONGO_URI as string;

const app = express();
app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.send("Test route is working");
});

const PORT = process.env.PORT || 5006;
app.listen(PORT, () => {
  connectDB(mongoURI);
  console.log(`Server is running on port ${PORT}`);
});
