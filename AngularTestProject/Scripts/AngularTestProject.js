var AngularTestProject = angular.module('AngularTestProject', ['ngRoute', 'ui.bootstrap']);


AngularTestProject.controller('LandingPageController', LandingPageController);
AngularTestProject.controller('LoginController', LoginController);
AngularTestProject.controller('LoginController', LoginController);
AngularTestProject.controller('RegisterController', RegisterController);

AngularTestProject.factory('AuthHttpResponseInterceptor', AuthHttpResponseInterceptor);
AngularTestProject.factory('LoginFactory', LoginFactory);
AngularTestProject.factory('RegistrationFactory', RegistrationFactory);

var configFunction = function ($routeProvider, $httpProvider, $locationProvider) {

    $locationProvider.hashPrefix('!').html5Mode(true);

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

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
configFunction.$inject = ['$routeProvider', '$httpProvider', '$locationProvider'];
AngularTestProject.config(configFunction);