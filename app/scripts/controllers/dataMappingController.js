'use strict';

angular.module('selfServeMockUpApp').controller('dataMappingController', function ($scope, $state) {
    console.log('actorMappingController');
    
    $scope.gotoActorEq = function () {
    	$state.go('form.curation.actor');
    	$scope.dataCurationTabs[1].active = true;
    };
    
  });
