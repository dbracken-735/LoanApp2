import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();
const port = 5000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
