/*
 * @Author: Alex Shi
 * @Date: 2020-03-10 13:35:42
 * @Last Modified by: Alex Shi
 * @Last Modified time: 2020-03-10 14:28:56
 */

angular
  .module("myApp", ["ngRoute", "myApp.view1", "myApp.view2", "myApp.version"])
  .config([
    "$locationProvider",
    "$routeProvider",
    ($locationProvider, $routeProvider) => {
      $locationProvider.hashPrefix("!");
      $routeProvider.otherwise({
        redirectTo: "/view1"
      });
    }
  ]);