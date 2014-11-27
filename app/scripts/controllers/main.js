'use strict';

/**
 * @ngdoc function
 * @name angularDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDashboardApp
 */
angular.module('angularDashboardApp')
  .controller('MainCtrl', ['$scope', 'MainService',function ($scope, MainService) {
  		MainService.getMorrisAreaChart().then(function(res){
			Morris.Area({
		        element: 'morris-area-chart',
		        data: res,
		        xkey: 'period',
		        ykeys: ['iphone', 'ipad', 'itouch'],
		        labels: ['iPhone', 'iPad', 'iPod Touch'],
		        pointSize: 2,
		        hideHover: 'auto',
		        resize: true
		    });
		},function(reason){
	  		console.log(reason);
	  	});

	  	MainService.getMorrisDonutChart().then(function(res){
	  		 Morris.Donut({
		        element: 'morris-donut-chart',
		        data: res,
		        resize: true
		    });
  		},function(reason){
	  		console.log(reason);
	  	});

	  	MainService.getMorrisBarChart().then(function(res){
	  		 Morris.Bar({
		        element: 'morris-bar-chart',
		        data: res,
		        xkey: 'y',
		        ykeys: ['a', 'b'],
		        labels: ['Series A', 'Series B'],
		        hideHover: 'auto',
		        resize: true
		    });
  		},function(reason){
	  		console.log(reason);
	  	});

   

    

}]);
