'use strict';

angular.module('selfServeMockUpApp').controller('dataSourceController', function ($scope, $state) {
    console.log('dataSourceController');
    
    $scope.gotoDataCuration = function (formatType, fileType) {
    	console.log('formatType is ' + formatType);
    	if (formatType === 'file') {
    		
    	}
    	console.log('tabs ');
    	console.log($scope.tabs);
    	$scope.tabs[1].active = true;
    	$state.go('form.' + 'curation');
    };
  });