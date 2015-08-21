
app.controller('SearchController', function($scope, $http, $routeParams){

  $scope.search = function(title){
    $scope.movies = '';
    $http.get('https://www.omdbapi.com/?s=' + title).
    then(function(response) {
      console.log(response);
      $scope.movies = response;
    }, function(response) {
      console.log('Movie Not Found');
    });

  }

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






// <p ng-repeat="chat in messages.data">{{chat.name}}:&nbsp;{{chat.content}}</p>
// Name<input type="text" ng-model="author">
// Message<input type="text" ng-model="message">
// <button ng-click="addMessage(author, message)">Submit</button>


// .when('/chat', {
//     templateUrl: 'partials/http.html',
//     controller: 'chatController'
//   }).

// app.controller('chatController', function($scope,$http){
//   $http.get('https://shielded-peak-6345.herokuapp.com/messages').
//   then(function(response) {
//     $scope.messages = response;
//   }, function(response) {
//     console.log('error');
//   });
//
//   $scope.addMessage = function(author,message){
//     var newMessage = {message:{name: author, content: message}};
//
//     $http.post('https://shielded-peak-6345.herokuapp.com/messages', newMessage).
//     then(function(response) {
//       $scope.messages = response;
//     }, function(response) {
//       console.log('error');
//     });
//
//
//   }
// })

// app.factory('movieService', ['$http', function ($http) {
//     return {
//         getMovieDetails: function (title) {
//             var getData = {
//                 method: 'jsonp',
//                 url: 'http://www.omdbapi.com/?t=' + title, //add +'&apikey=YOUR_API_KEY' if you have one.
//                 headers: {
//                     'Content-Type': undefined
//                 },
//                 params : {
//                     callback : 'JSON_CALLBACK'
//                 }
//
//             };
//             return $http(getData)
//         }
//
//     }
// }])
