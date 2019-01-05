var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope) {
    $scope.newUser = {};

    $scope.users = [
        { name: "rana", age: "24", gender: "female" },
        { name: "mohamed", age: "34", gender: "male" },
        { name: "sherien", age: "30", gender: "female" },
        { name: "wael", age: "20", gender: "male" }
    ];

    $scope.selectUser = function(user) {
        $scope.clickedUser = user;
    };

});