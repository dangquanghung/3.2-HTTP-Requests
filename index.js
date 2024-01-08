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

app.get("/count", (req, res) => {

  res.sendFile(__dirname + "/public/count.html");
  }
);

app.post("/submit",(req, res) => {
  let data = req.body;
  let fullName = data.fName + data.lName; 
  let nameWithoutSpace = fullName.replace(/ /g, "").toString().trim();
  let length = nameWithoutSpace.length;

  const fullLength = {length};
  res.render("count.ejs", fullLength);
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
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContent: "<em>This is some em text</em>",
  };
  res.render("index.ejs", data);
});
