import express from "express";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server run at port ${port}`);
});

app.get("/", (req, res) => {
  res.send('hello world')
});
