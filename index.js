const express = require("express");
const { readFile } = require("fs");

const app = express();

app.get("/", (request, response) => {
  readFile("./assets/index.html", "utf8", (err, html) => {
    if (err) {
      response.status(500).send("sorry, something went wrong");
    }
    response.send(html);
  });
});

app.listen(process.env.PORT || 3100, () => {
  console.log("App available on http://localhost:3100");
});
