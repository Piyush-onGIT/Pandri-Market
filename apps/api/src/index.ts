import express, { Express, Request, Response } from "express";

const app: Express = express();
app.use(express.json());

const port = 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
