
app.controller('SearchController', function($scope, $http, $routeParams){

$http.get('https://www.omdbapi.com/?s=' + $routeParams.search).
    then(function(response) {
      console.log(response);
      $scope.movies = response;
    }, function(response) {
      console.log('Movie Not Found');
    });

})

app.controller('ShowMovieController', function($scope, $http, $routeParams){
  $scope.oneMovie = '';
  $http.get('https://www.omdbapi.com/?i=' + $routeParams.id).
  then(function(response) {
    console.log(response);
    $scope.oneMovie = response;
  }, function(response) {
    console.log('Movie Not Found');
  });
})
