angular.module("onlineExam").controller("homePageCtrl", ['$scope', 'UserService', function ($scope, UserService) {
    $scope.loginAuthenticate = function () {
        var userObj = {
            "userName": $scope.userName,
            "password": $scope.password
        };
        UserService.loginAuthenticate(userObj).then(function (result) {}, function (error) {});
    };
}]);