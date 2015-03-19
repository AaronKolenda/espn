var sportsApp = angular.module("sportsApp", [])

sportsApp.controller("CarouselController", [ "$scope", "getData", function($scope, getData){

  getData("http://tiy-espn-info.herokuapp.com/espn/carousel", function(data){

    $scope.data = data

  });

}]);

sportsApp.controller("TopicsController", [ "$scope", "getData", function($scope, getData){

  getData("http://tiy-espn-info.herokuapp.com/espn/topics", function(data){

    $scope.data = data

  });

}]);

sportsApp.controller("HighlightsController", [ "$scope", "getData", function($scope, getData){

  getData("http://tiy-espn-info.herokuapp.com/espn/headlines", function(data){

  	console.log(data);
    $scope.data = data

    _.each($scope.data, function(element, index) {
    	if (element.glyph) {
    		if (element.glyph === "video") {
    			element.glyph = "http://assets.espn.go.com/icons/watch_headlines.png"
    		}
    		if (element.glyph === "insider") {
    			element.glyph = "http://a.espncdn.com/icons/in.gif"
    		}
    		if (element.glyph === "live") {
    			element.glyph = "http://assets.espn.go.com/i/ls.gif"
    		}
    	}
    });


  });

}]);

sportsApp.factory("getData", [ "$http", function($http){

  return function(url, callback) {

    $http.get(url).success(callback).error(callback)

  }

}])