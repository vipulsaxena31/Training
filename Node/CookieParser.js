const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

// Use cookie-parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  // Read a cookie
  const username = req.cookies.username || "Guest";

  res.send(`Hello, ${username}!`); // Added backticks for template literal
});

app.get("/set-cookie/:username", (req, res) => {
  // Set a cookie
  res.cookie("username", req.params.username);
  res.send("Cookie set!");
});

app.get("/clear-cookie", (req, res) => {
  // Clear a cookie
  res.clearCookie("username");
  res.send("Cookie cleared!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
