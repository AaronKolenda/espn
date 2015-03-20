var sportsApp = angular.module("sportsApp", [])

sportsApp.controller("CarouselController", [ "$scope", "getData", function($scope, getData){

  getData("http://tiy-espn-info.herokuapp.com/espn/carousel", function(data){

    $scope.data = data

  });

  $scope.hover = false;

  $scope.startHover = function(e) {
    $scope.hover = true;
    angular.element(e.srcElement).css("bottom", "12px");
  }

  $scope.stopHover = function(e) {
    $scope.hover = false;
    angular.element(e.srcElement).css("bottom", "2px");
  }

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

      _.each($scope.data, function(element, index) {
        element.border = false;
        if (element.analysis) {
          if (element.analysis.text.replace(/ /g,'') !== "") {
            element.border = true;
          }
        }
      });
      console.log($scope.data);


  });




}]);

sportsApp.factory("getData", [ "$http", function($http){

  return function(url, callback) {

    $http.get(url).success(callback).error(callback)

  }

}])