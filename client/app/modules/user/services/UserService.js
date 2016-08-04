angular.module("onlineExam").service("UserService", function ($q, $http, URL_CONFIG) {
    this.loginAuthenticate = function (userBody) {
        var defer = $q.defer();
        var url = URL_CONFIG.Login_url;
        $http(url, body).then(function (result) {
            defer.resolve(result);
        }, function (error) {
            defer.reject("Error while Login Authentication");
        });
        return defer.promise;
    };
});