'use strict';

/**
 * @ngdoc overview
 * @name selfServeMockUpApp
 * @description
 * # selfServeMockUpApp
 *
 * Main module of the application.
 */
angular.module('selfServeMockUpApp', ['ui.router', 'ui.bootstrap', 'bgDirectives'])

	.config(function($stateProvider, $urlRouterProvider) {
	
		$stateProvider
	
		// route to show our basic form (/form)
		.state('form', {
			url: '/form',
			templateUrl: 'views/ssNav.html',
			controller: 'navController'
		})
	
		// nested states 
		// each of these sections will have their own view
		// url will be nested (/form/profile)
		.state('form.datasource', {
			url: '/datasource',
			templateUrl: 'views/ssDataSource.html',
			controller: 'dataSourceController'
		})
	
		// url will be /form/interests
		.state('form.curation', {
			url: '/curation',
			templateUrl: 'views/ssDataCuration.html',
			controller: 'dataCurationController'
		})
		
		.state('form.curation.actor', {
			url: '/actor',
			templateUrl: 'views/ssDataActor.html',
			controller: 'actorMappingController'
		})
		
		.state('form.curation.mapping', {
			url: '/mapping',
			templateUrl: 'views/ssDataMapping.html',
			controller: 'dataMappingController'
		})
	
		// url will be /form/payment
		.state('form.load', {
			url: '/load',
			templateUrl: 'views/ssDataLoad.html',
			controller: 'loadDataController'
		})
		
		.state('congrats', {
			url: '/congrats',
			templateUrl: 'views/ssCongrats.html',
			controller: 'congratsController'
		})
	
		// catch all route
		// send users to the form page 
		$urlRouterProvider.otherwise('/form/datasource');
	});
