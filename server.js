const express = require("express");

const app = express();


app.get("/",function(req,res){
  res.send("<h1>Hello, World!</h1>");
});

app.get("/contact",function(req,res){
  res.send("Contact me at: mmayurapavan@gmail.com");
})

app.get("/about",function(req,res){
  res.send("Im a Computer Engineering Undergraduate");
})

app.get("/hobbies",function(req,res){
  res.send("<ul><li>coffee</li><li>tea</li></ul>");
})

app.listen(3000, function(){
  console.log("Server started on port 3000")
});
