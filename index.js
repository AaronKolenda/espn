var sportsApp = angular.module("sportsApp", [])

sportsApp.controller("CarouselController", [ "$scope", "getData", function($scope, getData){

  getData("http://tiy-espn-info.herokuapp.com/espn/carousel", function(data){

    $scope.data = data

      _.each($scope.data, function(element) {

          _.each(element.big.links, function(e) {   //set the appropiate glyph
      if (e.glyph) {
        if (e.glyph === "video") {
          e.glyph = "http://assets.espn.go.com/icons/watch_headlines.png"
        }
        if (e.glyph === "insider") {
          e.glyph = "http://a.espncdn.com/icons/in.gif"
        }
        if (e.glyph === "live") {
          e.glyph = "http://assets.espn.go.com/i/ls.gif"
        }
      }
      });
      
    });

  });

  $scope.hover = false;
  $scope.index = 0;

  //The following is for managing the hover functionality with more complexity than using a simple ng-hover

  $scope.startHover = function(e) {
    console.log(e);
    $scope.hover = true;
  }

  $scope.stopHover = function(e) {
    $scope.hover = false;
  }

  $scope.showBig = function(index) {
    $scope.index = index;
  }

}]);

sportsApp.controller("TopicsController", [ "$scope", "getData", function($scope, getData){

  getData("http://tiy-espn-info.herokuapp.com/espn/topics", function(data){

    $scope.data = data

  });

}]);

sportsApp.controller("HighlightsController", [ "$scope", "getData", function($scope, getData){

  getData("http://tiy-espn-info.herokuapp.com/espn/headlines", function(data){

    $scope.data = data

    _.each($scope.data, function(element) {   // Set the appropiate glyph
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

    // This is adding a thin grey border to only the highlights that have an analysis.

      _.each($scope.data, function(element) {
        element.border = false;
        if (element.analysis) {
          if (element.analysis.text.replace(/ /g,'') !== "") {
            element.border = true;
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