import express from "express";
const app = express()

app.listen(8081,() => {
  console.log('server running at http://127.0.0.1:8081');
})