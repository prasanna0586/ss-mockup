'use strict';

angular.module('selfServeMockUpApp').controller('actorMappingController', function ($scope, $state) {
    console.log('actorMappingController');
    $scope.gotoLoadData = function () {
    	$state.go('form.load');
    	$scope.tabs[2].active = true;
    };
    
  });
