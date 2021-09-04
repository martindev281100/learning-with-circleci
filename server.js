const port = 8080;
const express = require("express");

const app = express();

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
