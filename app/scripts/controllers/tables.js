'use strict';

/**
 * @ngdoc function
 * @name angularDashboardApp.controller:TablesCtrl
 * @description
 * # TablesCtrl
 * Controller of the angularDashboardApp
 */
angular.module('angularDashboardApp')
  .controller('TablesCtrl',['$scope', 'TablesService', function ($scope, TablesService) {
    	TablesService.getAdvancedTableData().then(function(data){
    		$scope.advancedData = data;
    	});

    	TablesService.getTablesData().then(function(data){
    		$scope.tablesData = data;
    	});	

    	TablesService.getClassTablesData().then(function(data){
    		$scope.classTablesData = data;
    	});		
  }]);
