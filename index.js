import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.listen(port, () => {
  console.log(`Server run at port ${port}`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", (req, res) => {
  res.send("<h1>Hi, this is about me</h1>");
});

app.post("/submit", (req, res) => {
  console.log(req.body);
});

app.put("/user/hungdq", (req, res) => {
  res.sendStatus(200);
});

app.patch("/user/hungdq", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/hungdq", (req, res) => {
  res.sendStatus(200);
});

app.get("/contact", (req, res) => {
  res.send("<h1>call me if you ... <br>are sad: 0332812366 </h1>");
});
