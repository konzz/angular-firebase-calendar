'use strict';

angular.module('calendar', ['ui.calendar', 'ui.date', 'firebase'])
.controller('calendar', ['$scope', '$firebase', function($scope, $firebase){

  var firebaseEvents = new Firebase("https://{{FIREBASE URL}}.firebaseio.com/");
  var events = $firebase(firebaseEvents);


  $scope.newEvent = {
    title: '',
    start: ''
  };

  $scope.events = [events.$asArray()];

  $scope.addEvent = function(){
    events.$push($scope.newEvent);

    $scope.newEvent = {
      title: '',
      start: ''
    };
  }

}]);