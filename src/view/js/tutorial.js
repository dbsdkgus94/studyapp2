app.controller("ctrl", function ($scope) {
    $scope.location = {};
    $scope.back ={};
    $scope.location.signup2 = function () {
        location.href = './tutorial2.html';
    };
    $scope.back.back = function() {
        history.go(-1)();
    };


});