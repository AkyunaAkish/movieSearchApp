app.config(function($routeProvider, $locationProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'SearchController'
  })
  .when('/searchResult', {
    templateUrl: 'partials/searchResult.html',
    controller: 'SearchController'
  }).when('/show', {
    templateUrl: 'partials/show.html',
    controller: 'SearchController'
  }).otherwise({redirectTo:"/"});

// use the HTML5 History API
  $locationProvider.html5Mode(true);
});
