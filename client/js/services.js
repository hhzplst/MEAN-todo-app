app.service("mainService", ["$http", function($http){
  return{
    allTodos: function(){
      return $http.get("/api/todos");
    },
    addTodo: function(todo){
      return $http.post("/api/todos", todo);
    },
    editTodo: function(todo){
      return $http.put("/api/todos/" + todo._id, todo);
    },
    getTodo: function(id){
      return $http.get("/api/todos/"+id);
    },
    deleteTodo: function(id){
      return $http.delete("/api/todos/"+id);
    }
  };
}]);