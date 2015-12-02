app.controller("TodosController", ["$scope", "mainService","$location", function($scope, mainService, $location){

    $scope.allTodos = function(){
      mainService.allTodos().then(function(res){
        $scope.todos = res.data;
      });
    };

    $scope.allTodos();

}]);

app.controller("NewTodoController", ["$scope","mainService","$location",function($scope, mainService, $location){
  
    $scope.addTodo = function(todo){
      mainService.addTodo(todo).then(function(res){
        $location.path("/todos");
      });
    };

}]);

app.controller("EditTodoController", ["$scope","mainService","$location","$routeParams",function($scope, mainService, $location, $routeParams){
  
    $scope.editTodo = function(todo){
      mainService.editTodo(todo).then(function(res){
        todo.showEditForm = false;
        $location.path("/todos");
      });
    };

    $scope.getTodo = function(){
      mainService.getTodo($routeParams.id).then(function(res){
        $scope.todo = res.data;
      });
    };

    $scope.getTodo();


    $scope.deleteTodo = function(id){
      mainService.deleteTodo(id).then(function(res){
        $location.path("/todos");
      });
    };

}]);