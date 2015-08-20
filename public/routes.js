app.config(function($routeProvider, $locationProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'MainController'
  })
  .when('/searchResult', {
    templateUrl: 'partials/searchResult.html',
    controller: 'SearchController'
  }).when('/show', {
    templateUrl: 'partials/show.html',
    controller: 'ShowController'
  }).otherwise({redirectTo:"/"});

// use the HTML5 History API
  $locationProvider.html5Mode(true);
});
