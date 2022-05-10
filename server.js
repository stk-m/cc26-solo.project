const express = require("express");
const knex = require("knex");
const app = express();

// const cors = require("cors");
const path = require("path");

const environment = process.env.NODE_ENV ? "production" : "development";
const config = require("./knexfile");

const db = knex(config[environment]);
const port = process.env.PORT || 8080;
//const port = process.env.PORT || 3000;

app.use(express.json())
// app.use(cors());


app.get("/list", async (req, res) => {
  try {
    let allList = await db.select("*").from("vocab_list");
    res.send(allList).status(200);
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });