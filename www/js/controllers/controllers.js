angular.module('app.controllers', ['azure'])


.controller('LoginCtrl', function(client,$scope, $state) {


    $scope.login = function() {
      client.login("google").then(function succes(data){
        console.log('logged in succesfully..')
        $state.go('app.list');
      }, function(error){

        //login failed.
      });
    }
  })

.controller('AppCtrl', function($scope, $state) {

    $scope.newTask = function() {
      $state.go('app.newtask');
    }
})

.controller('TodoListCtrl', function($scope,azureAPI) {

    $scope.updateTask = function(data) {

       var task = [];
      task.id = data.id;
      task.isComplete = data.isComplete;

     azureAPI.updateTask(task).then(function(result){
       loadTasks();

      },function (error){
        alert(error);
      });
    };

    function loadTasks()
    {
      $scope.tasks = [];
      azureAPI.getAll().then(function(result){
        $scope.tasks = result;
      },function (error){
        alert(error);
      });
    }
    loadTasks();
})
  .controller('NewToDoCtrl', function($scope,$state,azureAPI) {

    $scope.saveTask = function(task) {

      var response = azureAPI.addTask(task).then(function(result){
        console.log(response);
         $state.go('app.list');
      },function (error){
          alert(error);
      });
    }
  })
;
