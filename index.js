const express = require("express");
const app = express();

app.use((req, res) => {
  console.log("we got request");
  console.dir(res);
});

app.listen(8080, () => {
  console.log("Server is running on port http://localhost:8080");
});
