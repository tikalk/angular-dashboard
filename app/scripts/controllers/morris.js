'use strict';

/**
 * @ngdoc function
 * @name angularDashboardApp.controller:MorrisCtrl
 * @description
 * # MorrisCtrl
 * Controller of the angularDashboardApp
 */
angular.module('angularDashboardApp')
  .controller('MorrisCtrl', ['$scope', 'MorrisService', function ($scope, MorrisService) {
  		MorrisService.getAreaData().then(function(data){
  			 Morris.Area({
		        element: 'morris-area-chart',
		        data: data,
		        xkey: 'period',
		        ykeys: ['iphone', 'ipad', 'itouch'],
		        labels: ['iPhone', 'iPad', 'iPod Touch'],
		        pointSize: 2,
		        hideHover: 'auto',
		        resize: true
		    });
  		});

  		MorrisService.getDonutData().then(function(data){
  			Morris.Donut({
		        element: 'morris-donut-chart',
		        data: data,
		        resize: true
		    });
  		});

  		MorrisService.getBarData().then(function(data){
  			  Morris.Bar({
		        element: 'morris-bar-chart',
		        data: data,
		        xkey: 'y',
		        ykeys: ['a', 'b'],
		        labels: ['Series A', 'Series B'],
		        hideHover: 'auto',
		        resize: true
		    });
  		});


  }]);