const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("we got request");
//   // console.dir(res);
//   // res.send("<h1>Hello Express</h1>");
//   res.send({ message: "Hello World" });
// });

app.get("/", (req, res) => {
  res.send("This is homepage");
});

app.get("/cats", (req, res) => {
  res.send("This is cats page");
});

app.post("/cats", (req, res) => {
  res.send("This is cats page from homepage");
});

app.get("/about", (req, res) => {
  res.send("This isi about page");
});

// 404 handler
// app.get("*", (req, res) => {
//   res.send("Page Not Found");
// });

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// Server Running
app.listen(8080, () => {
  console.log("Server is running on port http://localhost:8080");
});
