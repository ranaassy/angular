var myApp = angular.module("myApp", []);

myApp.controller("myController", function($scope) {
    $scope.newUser = {};

    $scope.users = [
        { name: "rana", age: "24", gender: "female", photo: "images (1).png" },
        { name: "mohamed", age: "34", gender: "male", photo: "images (2).png" },
        { name: "sherien", age: "30", gender: "female", photo: "images (1).png" },
        { name: "ahmed", age: "20", gender: "male", photo: "images (2).png" }
    ];

    $scope.selectUser = function(user) {
        $scope.clickedUser = user;
    };

});