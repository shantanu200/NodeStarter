import express, { Express, Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import morgan from "morgan";
config();

const app: Express = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

morgan(":method :url :status :res[content-length] - :response-time ms");

app.get("/health", async (req: Request, res: Response) => {
  try {
    res
      .status(200)
      .json({ message: "ServerHealthCheck: OK 📈" });
  } catch (error) {
    res.status(500).json({ message: "ServerHealthCheck: Failed ❌",error });
  }
});

const PORT: string | number = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on PORT :: ${PORT} 🚀`);
});
