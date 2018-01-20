var express = require('express');
var app = express();
var request = require('request');
app.set("view engine", "ejs");

app.get('/search',function (req,res) {
  res.render("search");
});

app.get("/results",function(req,res) {
      var keyword = req.query.search;
      var type = req.query.type;
      //res.send("it worked");
        var url = "http://www.omdbapi.com/?apikey=30f1242d&s="+keyword+"&type="+type;
        request(url, function(error,response,body){
          console.log("hello");
        if(!error && response.statusCode == 200){
         var data = JSON.parse(body)
          res.render("results",{Data:data});
        }else {
          console.log(error);
        }
      });
});




app.listen(3000,function () {
  console.log("server is running");
});
