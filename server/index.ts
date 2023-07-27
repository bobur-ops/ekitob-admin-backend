import express, { Express } from "express";
import { serverConfig } from "./server-config";
import { bookRouter } from "./book/book.routes";
import cors from "cors";

const app: Express = express();
const port = serverConfig.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).send("Hello!");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

app.use("/api/book", bookRouter);

app.listen(port, () => {
  return console.info("app running on localhost:3000");
});
