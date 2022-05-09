const express = require("express");
const knex = require("knex");
const app = express();

app.use(express.json())

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });