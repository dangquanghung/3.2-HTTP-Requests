import bodyParser from "body-parser";
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

var userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));
const __dirname = dirname(fileURLToPath(import.meta.url));

function passwordCheck(req, res, next) {
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    userIsAuthorised = true;
  }
  next();
}

app.use(passwordCheck);

app.get("/go-to-public", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (userIsAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
  //Alternatively res.redirect("/")
});

app.listen(port, () => {
  console.log(`Server run at port ${port}`);
});
app.get("/about", (req, res) => {
  res.send("<h1>Hi, this is about me</h1>");
});

app.get("/", (req, res) => {
  res.render("index.ejs", {
    dayType: "a weekday",
    advice: "it's time to work hard",
  })
})
