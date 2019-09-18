 var express = require('express');
 var app = express();

 app.use(express.static("public"));

app.set("view engine", "ejs");

// catch 404 and forward to error handler
app.get("/",function (req,res) {
  res.render("index")
})

// error handler
app.listen("5000")
