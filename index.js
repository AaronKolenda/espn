var sportsApp = angular.module("sportsApp", [])

sportsApp.controller("CarouselController", [ "$scope", "getData", function($scope, getData){

  getData("http://tiy-espn-info.herokuapp.com/espn/carousel", function(data){

  	console.log(data);
    $scope.data = data

  });

}]);

sportsApp.controller("TopicsController", [ "$scope", "getData", function($scope, getData){

  getData("http://tiy-espn-info.herokuapp.com/espn/topics", function(data){

    $scope.data = data

  });

}]);

/*sportsApp.controller("HighlightsController", [ "$scope", "getData", function($scope, getData){

  getData("http://tiy-espn-info.herokuapp.com/espn/highlights", function(data){

    $scope.data = data

  });

}]);*/

sportsApp.factory("getData", [ "$http", function($http){

  return function(url, callback) {

    $http.get(url).success(callback).error(callback)

  }

}])