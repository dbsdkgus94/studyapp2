app.controller("ctrl", function ($scope) {
    $scope.location = {};
    $scope.back ={};

    $scope.location.signup = function () {
        location.href = './signup.html';
    };

    $scope.location.findpw = function () {
        location.href = './findpw.html';
    };
    $scope.back.back = function() {
        history.go(-1)();
    };

});