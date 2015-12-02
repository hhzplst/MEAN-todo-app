var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    morgan = require("morgan"),
    routes = require("./routes/todos");

app.use(morgan("tiny"));
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use("/css", express.static(path.join(__dirname, "../client/css")));
app.use("/js", express.static(path.join(__dirname, "../client/js")));
app.use("/templates", express.static(path.join(__dirname, "../client/js/templates")));


app.use("/api/todos", routes);


app.get("*", function(req, res){
  res.sendFile(path.join(__dirname, "../client", "index.html"));
});

app.listen(3000);