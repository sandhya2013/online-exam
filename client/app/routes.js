angular.module("onlineExam").config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/homePage', {
        templateUrl: 'modules/homePage/views/homePage.html',
        controller: 'homePageCtrl'
    }).otherwise({
        redirectTo: '/homePage'
    });
    }]);