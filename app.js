angular.module("todoListApp", []);

angular.module("todoListApp").controller('mainCtrl', function($scope) {
    //create empty array
    // array
    $scope.todos = [];
    // object
    $scope.task = {};

    //create function to retrieve user input
    //push data to array
    //create key objects for text and priority
    $scope.getTask = function() {
        $scope.todos.push(angular.copy($scope.task));
        $scope.task = {};

    }



});
