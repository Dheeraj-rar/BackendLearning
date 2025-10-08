const express = require('express')
const app = express()
require('dotenv').config()

const port = 4000


app.get("/", (req, res) => {
  res.send("Hello World");
})


app.get("/twitter", (req, res) => {
  res.send("Twitter");
})

app.get("/login" , (req, res) => {
  res.send("Login Page");
})  

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${port}`);
})