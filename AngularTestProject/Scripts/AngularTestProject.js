var AngularTestProject = angular.module('AngularTestProject', ['ngRoute']);

AngularTestProject.controller('LandingPageController', LandingPageController);
AngularTestProject.controller('LoginController', LoginController);
AngularTestProject.controller('LoginController', LoginController);
AngularTestProject.controller('RegisterController', RegisterController);

AngularTestProject.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
AngularTestProject.factory('LoginFactory', LoginFactory);
AngularTestProject.factory('RegistrationFactory', RegistrationFactory);

var configFunction = function ($routeProvider, $httpProvider) {
    $routeProvider.
        when('/routeOne', {
            templateUrl: 'routesDemo/one'
        })
        .when('/routeTwo/:donuts', {
            templateUrl: function (params) { return '/routesDemo/two?donuts=' + params.donuts; }
        })
        .when('/routeThree', {
            templateUrl: 'routesDemo/three'
        })
        .when('/login', {
            templateUrl: '/Account/Login',
            controller: LoginController
        })
        .when('/register', {
            templateUrl: '/Account/Register',
            controller: RegisterController
        });

    $httpProvider.interceptors.push('AuthHttpResponseInterceptor');
}
configFunction.$inject = ['$routeProvider', '$httpProvider'];

AngularTestProject.config(configFunction);