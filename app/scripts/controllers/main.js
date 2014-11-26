'use strict';

/**
 * @ngdoc function
 * @name angularDashboardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDashboardApp
 */
angular.module('angularDashboardApp')
  .controller('MainCtrl', ['$scope', 'MainPageService',function ($scope, MainPageService) {
  		MainPageService.getMorrisAreaChart().then(function(res){
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

	  	MainPageService.getMorrisDonutChart().then(function(res){
	  		 Morris.Donut({
		        element: 'morris-donut-chart',
		        data: res,
		        resize: true
		    });
  		},function(reason){
	  		console.log(reason);
	  	});

	  	MainPageService.getMorrisBarChart().then(function(res){
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

   

    

}])
.service('MainPageService', ['$http', '$q', function($http, $q){
	this.getMorrisAreaChart = function(){
		var deferred = $q.defer();
		deferred.resolve([{
            period: '2010 Q1',
            iphone: 2666,
            ipad: null,
            itouch: 2647
        }, {
            period: '2010 Q2',
            iphone: 2778,
            ipad: 2294,
            itouch: 2441
        }, {
            period: '2010 Q3',
            iphone: 4912,
            ipad: 1969,
            itouch: 2501
        }, {
            period: '2010 Q4',
            iphone: 3767,
            ipad: 3597,
            itouch: 5689
        }, {
            period: '2011 Q1',
            iphone: 6810,
            ipad: 1914,
            itouch: 2293
        }, {
            period: '2011 Q2',
            iphone: 5670,
            ipad: 4293,
            itouch: 1881
        }, {
            period: '2011 Q3',
            iphone: 4820,
            ipad: 3795,
            itouch: 1588
        }, {
            period: '2011 Q4',
            iphone: 15073,
            ipad: 5967,
            itouch: 5175
        }, {
            period: '2012 Q1',
            iphone: 10687,
            ipad: 4460,
            itouch: 2028
        }, {
            period: '2012 Q2',
            iphone: 8432,
            ipad: 5713,
            itouch: 1791
        }]);

		return deferred.promise;
	}
	this.getMorrisDonutChart = function(){
		var deferred = $q.defer();
		deferred.resolve([{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }]);


		return deferred.promise;
	}
	this.getMorrisBarChart = function(){
		var deferred = $q.defer();
		deferred.resolve([{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }]);

		return deferred.promise;
	}

}]);



