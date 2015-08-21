app.config(function($routeProvider, $locationProvider) {

  $routeProvider
  .when('/:search', {
    templateUrl: 'partials/home.html',
    controller: 'SearchController'
  }).when('/movies/:id', {
    templateUrl: 'partials/show.html',
    controller: 'ShowMovieController'
  })

// use the HTML5 History API
  $locationProvider.html5Mode(true);
});
