var app = angular.module("meanTodo", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $routeProvider
  .when("/todos", {
    templateUrl: "templates/index.html",
    controller: "TodosController"
  })
  .when("/todos/new", {
    templateUrl: "templates/new.html",
    controller: "NewTodoController"
  })
  .when("/todos/:id/edit", {
    templateUrl: "templates/edit.html",
    controller: "EditTodoController"
  })
  .otherwise({redirectTo:"/todos"});
});