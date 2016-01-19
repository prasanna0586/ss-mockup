'use strict';

angular.module('selfServeMockUpApp').controller('loadDataController', function ($scope, $state) {
    console.log('loadDataController');
    
    $scope.gotoCongratsScreen = function () {
    	$state.go('congrats');
    };
  });
