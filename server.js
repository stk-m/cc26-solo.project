const express = require("express");
const knex = require("knex");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json())

app.get("/api", (res, req)=>{
  res.send("get request")
})

// app.use("/api", (res, req)=>{
//   res.send("server is here")
// });

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });