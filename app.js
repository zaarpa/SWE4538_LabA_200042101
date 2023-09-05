const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { logRequest } = require("./middleware");
const PORT = 3000;
const router = require("./routes");
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("WELCOME");
});
app.get("/greetings", (req, res) => {
  res.send("Welcome to my new app.");
});
app.get("/hello", (req, res) => {
  res.send("Hello!");
});
app.get("/World", (req, res) => {
  res.send("World");
});
app.get("/greetings/:username", (req, res) => {
  const userName = req.params.username;
  res.send(`Welcome to my new app, ${userName}!`);
});
app.get("/welcome", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/middleware", logRequest, (req, res) => {
  console.log("We have implemented middleware");
});
app.use("/", router);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
