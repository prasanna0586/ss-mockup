'use strict';

angular.module('selfServeMockUpApp').controller('dataCurationController', function ($scope, $state) {
    console.log('dataCurationController');
    $scope.dataCurationTabs = [
                   { title:'Map Data Attributes', id: "map"},
                   { title:'Actor and Actor Equivalence', id: "actor"}                  
                 ];
    
    $state.go('form.curation.mapping');
    
   
  });