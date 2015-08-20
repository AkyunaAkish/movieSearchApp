app.controller('MainController', function($scope, $http, $routeParams){
  $scope.message="Home Message";
})

app.controller('SearchController', function($scope, $http, $routeParams){
  $scope.message="Search Message";
})
app.controller('ShowController', function($scope, $http, $routeParams){
  $scope.message="Show Message";
})
