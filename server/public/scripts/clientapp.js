var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "HomeController"
    })
    .when('/jason', {
      templateUrl: '/views/jason.html',
      controller: "JasonController"
    })
    .when('/freddy',{
      templateUrl: '/views/freddy.html',
      controller: "FreddyController"
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);
