app.controller("ctrl", function ($scope) {
    $scope.location = {};
    $scope.location.signin = function () {
      location.href = './signin.html';
    };


});