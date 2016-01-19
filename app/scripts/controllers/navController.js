'use strict';

angular.module('selfServeMockUpApp').controller('navController', function ($scope, $state) {
    console.log('Nav Controller');
    
    $scope.tabs = [
                   { title:'Select Data Source', id: "datasource"},
                   { title:'Data Curation', id: "curation"},
                   {title: 'Load Data', id: "load"}                   
                 ];
    
    $scope.onTabSelect = function (selectedTab) {
    	console.log('The selected tab is ' + selectedTab.id);
    	$state.go('form.' + selectedTab.id);
    };
  });
