import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server run at port ${port}`);
});

app.get("/", (req, res) => {
  res.send("<h1>hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>Hi, this is about me</h1>");
});

app.post("/register", (req, res) => {
  res.sendStatus(200);
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
