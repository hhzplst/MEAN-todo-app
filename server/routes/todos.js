var express = require("express"), 
    routes = express.Router(),
    db = require("../models");

routes.get("/", function(req, res){
  db.Todo.find({}, function(err, todos){
    if(err){
      res.status(500).send({message: "Somthing went wrong"});
    }
    res.status(200).send(todos);
  });
});

routes.post("/", function(req, res){
  db.Todo.create(req.body, function(err, todo){
    if(err){
      res.status(401).send({message: "Unauth­orized Request"});
    }
    res.status(201).send(todo);
  });
});

routes.get("/:id", function(req, res){
  db.Todo.findById(req.params.id, function(err, todo){
    if(err){
      res.status(404).send({message: "Todo Not Found"});
    }
    res.status(200).send(todo);
  });
});

routes.put("/:id", function(req, res){
  db.Todo.findByIdAndUpdate(req.params.id, req.body, function(err, todo){
    if(err){
      res.status(401).send({message: "Unauth­orized Request"});
    }
    todo.save();
    res.status(200).send(todo);
  });
});

routes.delete("/:id", function(req, res){
  db.Todo.findById(req.params.id, function(err, todo){
    if(err){
      res.status(401).send({message: "Unauth­orized Request"});
    }
    todo.remove();
    res.status(200).send({message: "Todo successfully removed"});
  });
});

module.exports = routes;

















