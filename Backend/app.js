const express=require('express');
const fs=require('fs');
const path = require("path");
const port=80;
const app=express();



app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname,"../","index.html"));
  });
  

  app.listen(port, () => {
    console.log("Working");
  })